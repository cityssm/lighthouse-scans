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
const get_site_urls_1 = require("@cityssm/get-site-urls");
const fs = require("fs");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const siteUrls = yield get_site_urls_1.getSiteUrls("https://saultstemarie.ca/");
    try {
        fs.writeFile("./sites/saultstemarieCA/urls.json", JSON.stringify(siteUrls), {}, () => {
            console.log("done");
        });
    }
    catch (err) {
        console.error(err);
    }
}))();
