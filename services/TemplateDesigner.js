"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
const RenderFileType_1 = require("../models/TemplateDesigner/RenderFileType");
class TemplateDesigner {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
        };
    }
    render(data, templateId, type = RenderFileType_1.RenderFileType.PDF) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/render/${templateId}?type=${type}`,
            method: 'POST',
            headers: this.headers,
            body: data,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call render on template service'));
    }
    getModels() {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/models`,
            method: 'GET',
            headers: this.headers,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call getModels on template service'));
    }
    getModel(id) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/model/${id}`,
            method: 'GET',
            headers: this.headers,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call getModel on template service'));
    }
    updateModel(id, data) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/model/${id}`,
            method: 'PUT',
            headers: this.headers,
            body: data,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call updateModel on template service'));
    }
    createModel(id, data) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/model/${id}`,
            method: 'POST',
            headers: this.headers,
            body: data,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call createModel on template service'));
    }
    deleteModel(id) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/model/${id}`,
            method: 'DELETE',
            headers: this.headers,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call deleteModel on template service'));
    }
}
exports.TemplateDesigner = TemplateDesigner;
