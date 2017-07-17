import * as popsicle from 'popsicle'
import EventStoreSettings from '../models/EventStoreSettings'
import MongoDbSettings from '../models/MongoDbSettings'
import IDiscoveryService from '../interfaces/IDiscoveryService'
import ICustomerService from '../interfaces/ICustomerService'
import IEmployeesService from '../interfaces/IEmployeesService'
import CustomerService from '../services/CustomerService'
import EmployeesService from '../services/EmployeesService'

class DiscoveryService implements IDiscoveryService {
	public host: string
	public port: number
	public timer: NodeJS.Timer
	private customerService: ICustomerService
	private employeesService: IEmployeesService

	constructor(host: string, port: number) {
		this.host = host;
		this.port = port;
	}

	startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string) {

		this.timer = setInterval(() =>
			this.registerService(serviceName, serviceVersion, servicePort)
				.catch((error) => {
					clearInterval(this.timer);
				})
			, 5 * 1000);
	}

	getEventStoreSettings(): Promise<EventStoreSettings> {
		return new Promise((resolve, reject) => {
			popsicle.request({
				url: `http://${this.host}:${this.port}/eventstore`,
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					'accept': 'application/json'
				},
			})
				.use(popsicle.plugins.parse('json'))
				.then((result) => {
					if (result.status !== 200)
					{
						reject(new Error(`failed to retrieve eventstore settings from discovery service`))
					}
					resolve(new EventStoreSettings(result.body));
				})
				.catch((error) => {
					reject(new Error(`failed to retrieve eventstore settings from discovery service: ${error.message}`));
				})
		})
	}

	getMongoDbSettings(): Promise<MongoDbSettings> {
		return new Promise((resolve, reject) => {
			popsicle.request({
				url: `http://${this.host}:${this.port}/mongodb`,
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					'accept': 'application/json'
				},
			})
				.use(popsicle.plugins.parse('json'))
				.then((result) => {
					if (result.status !== 200)
					{
						reject(new Error(`failed to retrieve mongodb settings from discovery service`))
					}
					resolve(new MongoDbSettings(result.body));
				})
				.catch((error) => {
					reject(new Error(`failed to retrieve mongodb settings from discovery service: ${error.message}`));
				})
		})
	}

	getCustomerService(): Promise<ICustomerService> {
		return new Promise((resolve, reject) => {
			if (!this.customerService) {
				popsicle.request({
					url: `http://${this.host}:${this.port}/CustomerService`,
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						'accept': 'application/json'
					},
				})
					.use(popsicle.plugins.parse('json'))
					.then((result) => {
						this.customerService = new CustomerService(result.body.host, result.body.port);
						resolve(this.customerService);
					})
					.catch((error) => {
						reject(new Error("failed to retrieve customer service from discovery service"));
					});
			}
			else {
				resolve(this.customerService);
			}
		});
	}

	getEmployeesService(): Promise<IEmployeesService> {
		return new Promise((resolve, reject) => {
			if (!this.employeesService) {
				popsicle.request({
					url: `http://${this.host}:${this.port}/EmployeesService`,
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						'accept': 'application/json'
					},
				})
					.use(popsicle.plugins.parse('json'))
					.then((result) => {
						this.employeesService = new EmployeesService(result.body.host, result.body.port);
						resolve(this.employeesService);
					})
					.catch((error) => {
						reject(new Error("failed to retrieve employees service from discovery service"));
					});
			}
			else {
				resolve(this.employeesService);
			}
		});
	}

	private registerService(serviceName: string, serviceVersion: string, servicePort: number | string) {
		return new Promise((resolve, reject) => {
			popsicle.request({
				url: `http://${this.host}:${this.port}/`,
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'accept': 'application/json'
				},
				body: {
					serviceName: serviceName,
					port: servicePort,
					timeToLive: new Date(new Date().getTime() + (5 * 1000)).toJSON(),
					serviceVersion: serviceVersion,
					public: false,
					serviceType: 0,
					proxyRoute: null
				}
			})
				.use(popsicle.plugins.parse('json'))
				.then((result) => {
					resolve();
				})
				.catch((error) => {
					reject(new Error(`could not reach DiscoveryService: ${error.message}`));
				})
		});
	}
}

export default DiscoveryService;