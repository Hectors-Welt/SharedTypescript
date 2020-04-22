"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars = require("handlebars");
const ApiClient_1 = require("./ApiClient");
class PushTemplateService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getTemplate(name, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const template = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/api/templates/${name}`);
                if (data) {
                    template.short = (handlebars.compile(template.short))(data);
                    template.long = (handlebars.compile(template.long))(data);
                }
                return template;
            }
            catch (err) {
                throw new Error('failed to retrieve template from push template service');
            }
        });
    }
}
exports.PushTemplateService = PushTemplateService;