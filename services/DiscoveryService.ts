import * as popsicle from 'popsicle'
import { LocationInfo } from '../models/DiscoveryService/LocationInfo'
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings'
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings'
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings'
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings'
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings'
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum'
import { IDiscoveryService } from '../interfaces/IDiscoveryService'
import { ICustomerService } from '../interfaces/ICustomerService'
import { IEmployeesService } from '../interfaces/IEmployeesService'
import { IMembershipService } from '../interfaces/IMembershipService'
import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService'
import { IPushNotificationService } from '../interfaces/IPushNotificationService'
import { IRatingService } from '../interfaces/IRatingService'
import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend'
import { IAccountingService } from '../interfaces/IAccountingService'
import { ICheckinOutService } from '../interfaces/ICheckinOutService'
import { IArticlesService } from '../interfaces/IArticlesService'
import { IMailingService } from '../interfaces/IMailingService'
import { MembershipService } from './MembershipService'
import { EmployeesService } from './EmployeesService'
import { CustomerService } from './CustomerService'
import { TwoFactorAuthenticationService } from './TwoFactorAuthenticationService'
import { PushNotificationService } from './PushNotificationService'
import { RatingService } from './RatingService'
import { LegacyAppsiteBackend } from './LegacyAppsiteBackend'
import { AccountingService } from './AccountingService'
import { CheckinOutService } from './CheckinOutService'
import { ArticlesService } from './ArticlesService'
import { MailingService } from './MailingService'

export class DiscoveryService implements IDiscoveryService {
  public host: string;
  public port: number;
  public timer: NodeJS.Timer;
  private customerService: ICustomerService;
  private employeesService: IEmployeesService;
  private membershipService: IMembershipService;
  private twoFactorAuthenticationService: ITwoFactorAuthenticationService;
  private pushNotificationService: IPushNotificationService;
  private ratingService: IRatingService;
  private legacyAppsiteBackend: ILegacyAppsiteBackend;
  private accountingService: IAccountingService;
  private checkinOutService: ICheckinOutService;
  private articlesService: IArticlesService;
  private mailingService: IMailingService;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
  }

  startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType) {

    this.timer = setInterval(() =>
      this.registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType)
        .catch((error) => {
          clearInterval(this.timer);
        })
      , 5 * 1000);
  }

  getLocationInfo(): Promise<LocationInfo> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubInfo`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error(`failed to retrieve location info from discovery service`))
          }
          resolve(new LocationInfo(result.body));
        })
        .catch((error) => {
          reject(new Error(`failed to retrieve location info from discovery service: ${error.message}`));
        })
    })
  }

  getEventStoreSettings(): Promise<EventStoreSettings> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/eventstore`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
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
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error(`failed to retrieve mongodb settings from discovery service`))
          }
          resolve(new MongoDbSettings(result.body));
        })
        .catch((error) => {
          reject(new Error(`failed to retrieve mongodb settings from discovery service: ${error.message}`));
        })
    })
  }

  getRabbitMqSettings(): Promise<RabbitMqSettings> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/rabbitmq`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error(`failed to retrieve rabbitmq settings from discovery service`))
          }
          resolve(new RabbitMqSettings(result.body));
        })
        .catch((error) => {
          reject(new Error(`failed to retrieve rabbitmq settings from discovery service: ${error.message}`));
        })
    })
  }

  getHectorDbSettings(): Promise<HectorDbSettings> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/connection`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error(`failed to retrieve hector db settings from discovery service`))
          }
          resolve(new HectorDbSettings(result.body));
        })
        .catch((error) => {
          reject(new Error(`failed to retrieve hector db settings from discovery service: ${error.message}`));
        })
    })
  }

  getBraintreeSettings(): Promise<BraintreeSettings> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/braintree`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error(`failed to retrieve braintree settings from discovery service`))
          }
          resolve(new BraintreeSettings(result.body));
        })
        .catch((error) => {
          reject(new Error(`failed to retrieve hector braintree from discovery service: ${error.message}`));
        })
    })
  }

  getMailingService(): Promise<IMailingService> {
    return new Promise((resolve, reject) => {
      if (!this.mailingService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/MailingService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.mailingService = new MailingService(result.body.host, result.body.port);
            resolve(this.mailingService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve miling service from discovery service'));
          });
      }
      else {
        resolve(this.mailingService);
      }
    });
  }

  getCustomerService(): Promise<ICustomerService> {
    return new Promise((resolve, reject) => {
      if (!this.customerService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/CustomerService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.customerService = new CustomerService(result.body.host, result.body.port);
            resolve(this.customerService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve customer service from discovery service'));
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
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.employeesService = new EmployeesService(result.body.host, result.body.port);
            resolve(this.employeesService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve employees service from discovery service'));
          });
      }
      else {
        resolve(this.employeesService);
      }
    });
  }

  getMembershipService(): Promise<IMembershipService> {
    return new Promise((resolve, reject) => {
      if (!this.membershipService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/MembershipService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.membershipService = new MembershipService(result.body.host, result.body.port);
            resolve(this.membershipService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve membership service from discovery service'));
          });
      }
      else {
        resolve(this.membershipService);
      }
    });
  }

  getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService> {
    return new Promise((resolve, reject) => {
      if (!this.twoFactorAuthenticationService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/TwoFactorAuthenticationService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.twoFactorAuthenticationService = new TwoFactorAuthenticationService(result.body.host, result.body.port);
            resolve(this.twoFactorAuthenticationService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve two factor authentication service from discovery service'));
          });
      }
      else {
        resolve(this.twoFactorAuthenticationService);
      }
    });
  }

  getPushNotificationService(): Promise<IPushNotificationService> {
    return new Promise((resolve, reject) => {
      if (!this.pushNotificationService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/PushNotificationService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.pushNotificationService = new PushNotificationService(result.body.host, result.body.port);
            resolve(this.pushNotificationService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve push notification service from discovery service'));
          });
      }
      else {
        resolve(this.pushNotificationService);
      }
    });
  }

  getRatingService(): Promise<IRatingService> {
    return new Promise((resolve, reject) => {
      if (!this.ratingService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/RatingService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.ratingService = new RatingService(result.body.host, result.body.port);
            resolve(this.ratingService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve rating service from discovery service'));
          });
      }
      else {
        resolve(this.ratingService);
      }
    });
  }

  getLegacyAppsiteBackend(): Promise<ILegacyAppsiteBackend> {
    return new Promise((resolve, reject) => {
      if (!this.legacyAppsiteBackend) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/LegacyAppsiteBackend`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.legacyAppsiteBackend = new LegacyAppsiteBackend(result.body.host, result.body.port);
            resolve(this.legacyAppsiteBackend);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve legacy appsite backend from discovery service'));
          });
      }
      else {
        resolve(this.legacyAppsiteBackend);
      }
    });
  }

  getAccountingService(): Promise<IAccountingService> {
    return new Promise((resolve, reject) => {
      if (!this.accountingService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/AccountingService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.accountingService = new AccountingService(result.body.host, result.body.port);
            resolve(this.accountingService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve accounting service from discovery service'));
          });
      }
      else {
        resolve(this.accountingService);
      }
    });
  }

  getCheckinOutService(): Promise<ICheckinOutService> {
    return new Promise((resolve, reject) => {
      if (!this.checkinOutService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/CheckinOutService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.checkinOutService = new CheckinOutService(result.body.host, result.body.port);
            resolve(this.checkinOutService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve checkinout service from discovery service'));
          });
      }
      else {
        resolve(this.checkinOutService);
      }
    });
  }

  getArticlesService(): Promise<IArticlesService> {
    return new Promise((resolve, reject) => {
      if (!this.articlesService) {
        popsicle.request({
          url: `http://${this.host}:${this.port}/ArticlesService`,
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
        })
          .use(popsicle.plugins.parse('json'))
          .then((result) => {
            this.articlesService = new ArticlesService(result.body.host, result.body.port);
            resolve(this.articlesService);
          })
          .catch((error) => {
            reject(new Error('failed to retrieve articles service from discovery service'));
          });
      }
      else {
        resolve(this.articlesService);
      }
    });
  }

  private registerService(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType) {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: {
          serviceName: serviceName,
          port: servicePort,
          timeToLive: new Date(new Date().getTime() + (5 * 1000)).toJSON(),
          serviceVersion: serviceVersion,
          public: isPublic,
          serviceType: serviceType,
          proxyRoute: proxyRoute,
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