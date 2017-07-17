import HealthInfo from '../models/HealthInfo'

interface IHealthService{

    healthInfo: HealthInfo

    registerHealthy(check: string, message: string)
    unregisterHealthy(check: string)
    registerUnhealthy(check: string, message: string)
    unregisterUnhealthy(check: string)
}

export default IHealthService;