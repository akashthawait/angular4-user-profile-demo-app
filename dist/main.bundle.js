webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profileOption{\n    height: 15%;\n    width: 15%;\n    margin-top: -18%; \n}\nagm-map {\n    height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <div class=\"pull-right\">\n    <a class=\"col-sm-1\" routerLink=\"/myProfile\"><img class=\"img-fluid img-circle\" src=\"assets/akash-s.png\" alt=\"Profile\"></a>\n  </div>\n  <div class=\"h1 text-center\">\n    Angular 4 Demo App!\n    <br>\n    <span class=\"h5\">Click on the user profile icon to continue</span>\n  </div>\n  <hr>\n  <br>\n  <div class=\"container\">\n    <router-outlet>\n    </router-outlet>\n    <br>\n    <div class=\"center container\">\n      <span class=\"h3 text-center\">Gyms Near Me</span>\n      <br>\n      <br>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-marker *ngFor=\"let gym of gyms\" [latitude]=\"gym.geometry.location.lat\" [longitude]=\"gym.geometry.location.lng\"></agm-marker>\n      </agm-map>\n    </div>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.gyms = [];
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.zoom = 18;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 18;
                _this.getGymLocation(_this.lat, _this.lng, function (locations) {
                    _this.gyms = locations.data.results;
                    console.log(_this.gyms);
                });
            });
        }
    }
    AppComponent.prototype.getGymLocation = function (lat, lng, cb) {
        this.getNearByGym(lat, lng).subscribe(function (data) {
            // console.log("success " + JSON.stringify(data))
            cb(data);
        });
    };
    AppComponent.prototype.getNearByGym = function (lat, lng) {
        console.log("Lat: ", lat, " Lng: ", lng);
        var apiUrl = "http://localhost:5000/api/getNearByGym";
        return this.http.get(apiUrl + '?lat=' + lat + '&lng=' + lng + '&radius=500&type=gym')
            .map(function (response) {
            return response.json();
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_edit_user_profile_component__ = __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_service__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_user_profile_edit_user_profile_service__ = __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_edit_user_profile_component__["a" /* EditUserProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([{
                    "path": "myProfile",
                    "component": __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__["a" /* UserProfileComponent */]
                },
                {
                    "path": "editProfile",
                    "component": __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_edit_user_profile_component__["a" /* EditUserProfileComponent */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM"
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_10__edit_user_profile_edit_user_profile_service__["a" /* EditUserProfileService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" role=\"form\">\n  <!-- <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">First name:</label>\n    <div class=\"col-lg-8\">\n      <input class=\"form-control\" type=\"text\" [value]=\"newUserDetails.first_name\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Last name:</label>\n    <div class=\"col-lg-8\">\n      <input class=\"form-control\" type=\"text\" [value]=\"newUserDetails.last_name\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Email Address:</label>\n    <div class=\"col-lg-8\">\n      <input class=\"form-control\" type=\"text\" [value]=\"newUserDetails.email_address\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Phone Number:</label>\n    <div class=\"col-lg-8\">\n      <input class=\"form-control\" type=\"text\" [value]=\"newUserDetails.phone_number\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Current City:</label>\n    <div class=\"col-lg-8\">\n      <input class=\"form-control\" type=\"text\" [value]=\"newUserDetails.city\">\n    </div>\n  </div> -->\n  <div class=\"form-group\" *ngFor=\"let key of keys\">\n    <label class=\"col-lg-3 control-label\">{{key| uppercase}}:</label>\n    <div class=\"col-lg-8\">\n      <input class=\"form-control\" type=\"text\" name = '{{key}}' [value]=\"userDetails[key]\" [(ngModel)]=\"userDetails[key]\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-md-3 control-label\"></label>\n    <div class=\"col-md-8\">\n      <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\" (click)=\"updateUserInfo ()\">\n      <span></span>\n      <input type=\"reset\" class=\"btn btn-default\" value=\"Cancel\">\n    </div>\n  </div>  \n</form>"

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_user_profile_edit_user_profile_service__ = __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditUserProfileComponent = (function () {
    function EditUserProfileComponent(eups) {
        this.eups = eups;
        this.newUserDetails = {};
        this.userDetails = {};
        this.keys = [];
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserDetails(function (userDetails) {
            for (var i in userDetails) {
                _this.keys.push(i);
            }
        });
    };
    EditUserProfileComponent.prototype.getUserDetails = function (cb) {
        var _this = this;
        this.eups.getUserProfile(function (result) {
            if (result && result.status && result.status == 200 && result.data) {
                _this.userDetails = result.data;
                cb(_this.userDetails);
            }
        });
    };
    EditUserProfileComponent.prototype.updateUserInfo = function () {
        this.eups.updateUserProfile(this.userDetails, function (response) {
            console.log("Response: ", response);
            if (response && response.status == 200 && response.message == "Success") {
                window.location.href = "/";
            }
            else {
                alert("An error occurred while updating profile");
                window.location.href = "/";
            }
        });
    };
    return EditUserProfileComponent;
}());
EditUserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-user-profile',
        template: __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_user_profile_edit_user_profile_service__["a" /* EditUserProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_user_profile_edit_user_profile_service__["a" /* EditUserProfileService */]) === "function" && _a || Object])
], EditUserProfileComponent);

var _a;
//# sourceMappingURL=edit-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditUserProfileService = (function () {
    function EditUserProfileService(http) {
        this.http = http;
        this.getApiUrl = 'http://localhost:5000/api/getUser'; // URL to web api
        this.postApiUrl = 'http://localhost:5000/api/updateUser'; // URL to web api    
    }
    EditUserProfileService.prototype.getUserProfile = function (cb) {
        this.getDataFromDb().subscribe(function (response) {
            cb(response);
        });
    };
    EditUserProfileService.prototype.getDataFromDb = function () {
        return this.http.get(this.getApiUrl)
            .map(function (result) {
            return result.json();
        });
    };
    EditUserProfileService.prototype.updateUserProfile = function (updateParams, cb) {
        this.updateUser(updateParams).subscribe(function (data) {
            console.log("Data: ", data);
            cb(data);
        });
    };
    EditUserProfileService.prototype.updateUser = function (updateParams) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.postApiUrl, updateParams, options)
            .map(function (data) {
            return data.json();
        });
    };
    return EditUserProfileService;
}());
EditUserProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EditUserProfileService);

var _a;
//# sourceMappingURL=edit-user-profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"text-center h4\" *ngIf=\"userDetails.first_name\">{{userDetails.first_name}}'s Profile</div>\n    <div class=\"text-center\"><img class=\"img-fluid img-circle\" src=\"assets/akash-m.png\" alt=\"Profile\"></div>\n  </div>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading text-center lead\">Profile <a class=\"pull-right small\" routerLink=\"/editProfile\">Edit</a></div>\n        <div class=\"panel-body\" *ngFor=\"let item of keys\">\n          <span class=\"col-xs-4 text-muted text\"*ngIf=\"item!=bio\"><strong>{{item | uppercase}}:</strong> </span> <span class=\"col-xs-8\">{{userDetails[item]}}</span>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"col-xs-8\" *ngIf=\"userDetails.bio\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading text-center lead\">BIO</div>\n        <div class=\"panel-body\">\n          <span>\n            {{userDetails.bio}}\n          </span></div>\n      </div>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_profile_service__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(ups) {
        this.ups = ups;
        // Declaring variable which contains default values
        this.userDetails = {};
        this.keys = [];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserDetails(function (userDetails) {
            for (var i in userDetails) {
                _this.keys.push(i);
            }
        });
    };
    UserProfileComponent.prototype.getUserDetails = function (cb) {
        var _this = this;
        this.ups.getUserProfile(function (result) {
            if (result && result.status && result.status == 200 && result.data) {
                _this.userDetails = result.data;
                cb(_this.userDetails);
            }
        });
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_profile_service__["a" /* UserProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_profile_service__["a" /* UserProfileService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileService = (function () {
    function UserProfileService(http) {
        this.http = http;
        // private headers = new Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'http://localhost:5000/api/getUser'; // URL to web api
    }
    UserProfileService.prototype.getUserProfile = function (cb) {
        this.getDataFromDb().subscribe(function (response) {
            cb(response);
        });
    };
    UserProfileService.prototype.getDataFromDb = function () {
        return this.http.get(this.apiUrl)
            .map(function (result) {
            return result.json();
        });
    };
    return UserProfileService;
}());
UserProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserProfileService);

var _a;
//# sourceMappingURL=user-profile.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map