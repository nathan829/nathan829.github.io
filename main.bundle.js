webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SUBJECTS = [];
var SubjectService = (function () {
    function SubjectService(settingsService) {
        this.settingsService = settingsService;
        this.currentDateFormat = "dd/mm/yy";
    }
    SubjectService.prototype.ngOnInit = function () {
    };
    SubjectService.prototype.getSubjects = function () {
        return Promise.resolve(SUBJECTS);
    };
    SubjectService.prototype.setDateFormat = function (format) {
        this.currentDateFormat = format;
        // Set all to this new format.
        for (var _i = 0, SUBJECTS_1 = SUBJECTS; _i < SUBJECTS_1.length; _i++) {
            var subject = SUBJECTS_1[_i];
            for (var _a = 0, _b = subject['tasks']; _a < _b.length; _a++) {
                var task = _b[_a];
                switch (format) {
                    case 'dd/mm/yyyy':
                        task.formatddmmyyyy();
                        break;
                    case 'mm/dd/yyyy':
                        task.formatmmddyyyy();
                        break;
                    case 'dd/mm/yy':
                        task.formatddmmyy();
                        break;
                    case 'mm/dd/yy':
                        task.formatmmddyy();
                        break;
                    case 'dd/mm':
                        task.formatddmm();
                        break;
                    case 'mm/dd':
                        task.formatmmdd();
                }
            }
        }
    };
    SubjectService.prototype.getDateFormat = function () {
        return this.currentDateFormat;
    };
    SubjectService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]) === 'function' && _a) || Object])
    ], SubjectService);
    return SubjectService;
    var _a;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/subject.service.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_confirm_dialog_confirm_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subject__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
        this.currentSubject = new __WEBPACK_IMPORTED_MODULE_3__subject__["a" /* Subject */]("");
    }
    DialogService.prototype.confirm = function (title, message, viewContainerRef) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogConfig */]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__dialog_confirm_dialog_confirm_component__["a" /* DialogConfirmComponent */], config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogService.prototype.setSubject = function (subj) {
        this.currentSubject = subj;
    };
    DialogService.prototype.getSubject = function () {
        return this.currentSubject;
    };
    DialogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === 'function' && _a) || Object])
    ], DialogService);
    return DialogService;
    var _a;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/dialog.service.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        this.dateFormat = "dd/mm/yy";
    }
    SettingsService.prototype.getDateFormat = function () {
        return this.dateFormat;
    };
    SettingsService.prototype.setDateFormat = function (format) {
        this.dateFormat = format;
    };
    SettingsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SettingsService);
    return SettingsService;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/settings.service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject; });
var Subject = (function () {
    function Subject(name) {
        this.name = name;
        this.open = false;
        this.tasks = [];
    }
    return Subject;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/subject.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subject_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogConfirmComponent = (function () {
    function DialogConfirmComponent(dialogRef, dialogService, subjectService) {
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.subjectService = subjectService;
        this.subjects = [];
    }
    DialogConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects()
            .then(function (subjects) { return _this.subjects = subjects; });
        this.subject = this.dialogService.getSubject();
    };
    DialogConfirmComponent.prototype.removeSubjectDialog = function () {
        this.subject = this.dialogService.getSubject();
        var index = this.subjects.indexOf(this.subject);
        this.subjects.splice(index, 1);
        console.log("deleting");
    };
    DialogConfirmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-dialog-confirm',
            template: __webpack_require__(830),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__subject_service__["a" /* SubjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__subject_service__["a" /* SubjectService */]) === 'function' && _c) || Object])
    ], DialogConfirmComponent);
    return DialogConfirmComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/dialog-confirm.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__(831),
            styles: [__webpack_require__(822)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/home-page.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-not-found-page',
            template: __webpack_require__(833),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/not-found-page.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulePageComponent = (function () {
    function SchedulePageComponent() {
    }
    SchedulePageComponent.prototype.ngOnInit = function () {
    };
    SchedulePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-schedule-page',
            template: __webpack_require__(834),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [])
    ], SchedulePageComponent);
    return SchedulePageComponent;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/schedule-page.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPageComponent = (function () {
    function SettingsPageComponent(subjectService, settingsService) {
        this.subjectService = subjectService;
        this.settingsService = settingsService;
        this.subjects = [];
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects()
            .then(function (subjects) { return _this.subjects = subjects; });
        this.dateFormat = this.settingsService.getDateFormat();
    };
    SettingsPageComponent.prototype.firstDropDownChanged = function (val) {
        this.subjectService.setDateFormat(val);
        this.settingsService.setDateFormat(val);
    };
    SettingsPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-settings-page',
            template: __webpack_require__(835),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]) === 'function' && _b) || Object])
    ], SettingsPageComponent);
    return SettingsPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/settings-page.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_service__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectListPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectListPageComponent = (function () {
    function SubjectListPageComponent(subjectService, dialogsService, viewContainerRef) {
        this.subjectService = subjectService;
        this.dialogsService = dialogsService;
        this.viewContainerRef = viewContainerRef;
        this.adding = false;
        this.subjectToBeAdded = "";
        this.subjects = [];
    }
    SubjectListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects()
            .then(function (subjects) { return _this.subjects = subjects; });
    };
    SubjectListPageComponent.prototype.toggleAdding = function () {
        if (this.adding) {
            this.adding = false;
        }
        else {
            this.adding = true;
        }
    };
    SubjectListPageComponent.prototype.addSubject = function () {
        this.subjects.push(new __WEBPACK_IMPORTED_MODULE_1__subject__["a" /* Subject */](this.subjectToBeAdded));
        this.subjectToBeAdded = "";
        this.toggleAdding();
    };
    SubjectListPageComponent.prototype.removeSubject = function (subject) {
        var result;
        this.dialogsService
            .confirm('Confirmation', 'Are you sure you want to delete ' + subject['name'] + "?", this.viewContainerRef)
            .subscribe(function (res) { return result = res; });
        this.dialogsService.setSubject(subject);
    };
    SubjectListPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-subject-list-page',
            template: __webpack_require__(836),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__subject_service__["a" /* SubjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__subject_service__["a" /* SubjectService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dialog_service__["a" /* DialogService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */]) === 'function' && _c) || Object])
    ], SubjectListPageComponent);
    return SubjectListPageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/subject-list-page.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task__ = __webpack_require__(664);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoPageComponent = (function () {
    function TodoPageComponent(subjectService) {
        this.subjectService = subjectService;
        this.taskToBePushed = "";
        this.dateString = "";
        this.subjects = [];
    }
    TodoPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects()
            .then(function (subjects) { return _this.subjects = subjects; });
        // Initialise dateString with today's date.
        this.resetDateInput();
    };
    TodoPageComponent.prototype.removeSelected = function () {
        for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
            var subject = _a[_i];
            for (var _b = 0, _c = subject['tasks']; _b < _c.length; _b++) {
                var task = _c[_b];
                if (task['completed']) {
                    var index = subject['tasks'].indexOf(task);
                    subject['tasks'].splice(index, 1);
                }
            }
        }
    };
    TodoPageComponent.prototype.anySelected = function () {
        for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
            var subject = _a[_i];
            for (var _b = 0, _c = subject['tasks']; _b < _c.length; _b++) {
                var task = _c[_b];
                if (task['completed']) {
                    return true;
                }
            }
        }
        return false;
    };
    TodoPageComponent.prototype.pushTask = function (subject) {
        var index = this.subjects.indexOf(subject);
        // html5 always gives it in the form yyyy-mm-dd.
        var yyyy = this.dateString.slice(0, 4);
        var mm = this.dateString.slice(5, 7);
        var dd = this.dateString.slice(8, 10);
        this.subjects[index]['tasks'].push(new __WEBPACK_IMPORTED_MODULE_3__task__["a" /* Task */](this.taskToBePushed, dd, mm, yyyy, this.subjectService.getDateFormat()));
        // Since data binding is 2 way, we need to reset.
        this.taskToBePushed = "";
        // Close subject.
        this.subjects[index]['open'] = false;
        // Order list for this subject.
        this.orderList(index);
        this.resetDateInput();
    };
    TodoPageComponent.prototype.resetDateInput = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; // January is 0.
        var yyyy = today.getFullYear();
        var ddStr = dd.toString();
        var mmStr = mm.toString();
        var yyyyStr = yyyy.toString();
        if (dd < 10) {
            ddStr = "0" + dd;
        }
        if (mm < 10) {
            mmStr = "0" + mm;
        }
        this.dateString = yyyyStr + "-" + mmStr + "-" + ddStr;
    };
    TodoPageComponent.prototype.orderList = function (index) {
        this.subjects[index]['tasks'].sort(function (a, b) {
            var aDueYear = +a.dueYear;
            var aDueMonth = +a.dueMonth;
            var aDueDay = +a.dueDay;
            var bDueYear = +b.dueYear;
            var bDueMonth = +b.dueMonth;
            var bDueDay = +b.dueDay;
            if (aDueYear > bDueYear) {
                return 1;
            }
            else if (aDueYear < bDueYear) {
                return -1;
            }
            else {
                if (aDueMonth > bDueMonth) {
                    return 1;
                }
                else if (aDueMonth < bDueMonth) {
                    return -1;
                }
                else {
                    if (aDueDay > bDueDay) {
                        return 1;
                    }
                    else if (aDueDay < bDueDay) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }
        });
    };
    TodoPageComponent.prototype.toggleInput = function (subject) {
        var index = this.subjects.indexOf(subject);
        var count = 0;
        if (index == -1) {
            console.log("Subject object not found in list.");
            return;
        }
        if (subject['open'] == true) {
            subject['open'] = false;
        }
        else {
            subject['open'] = true;
            // Close all other subject tabs.
            for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
                var subject_1 = _a[_i];
                if (count != index) {
                    subject_1['open'] = false;
                }
                count++;
            }
        }
        this.taskToBePushed = "";
    };
    TodoPageComponent.prototype.addNewSubject = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_2__subject__["a" /* Subject */]("adding");
        this.subjects.push(sub);
    };
    TodoPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-todo-page',
            template: __webpack_require__(837),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */]) === 'function' && _a) || Object])
    ], TodoPageComponent);
    return TodoPageComponent;
    var _a;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/todo-page.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 504;


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(662);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/main.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_page_not_found_page_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_page_schedule_page_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_page_todo_page_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_page_settings_page_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subject_list_page_subject_list_page_component__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', data: { name: 'UniBuddy' } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */], data: { name: 'UniBuddy' } },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_4__schedule_page_schedule_page_component__["a" /* SchedulePageComponent */], data: { name: 'Schedule' } },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_5__todo_page_todo_page_component__["a" /* TodoPageComponent */], data: { name: 'Todo List' } },
    { path: 'subject-list', component: __WEBPACK_IMPORTED_MODULE_7__subject_list_page_subject_list_page_component__["a" /* SubjectListPageComponent */], data: { name: 'Subject List' } },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_6__settings_page_settings_page_component__["a" /* SettingsPageComponent */], data: { name: 'Settings' } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */], data: { name: 'ERROR' } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/app-routing.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    { routerLink: "home", name: "Home" },
    { routerLink: "schedule", name: "Schedule" },
    { routerLink: "todo", name: "Todo List" },
    { routerLink: "subject-list", name: "Subject List" },
    { routerLink: "settings", name: "Settings" }
];
var AppComponent = (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.routeList = ROUTES;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            _this.title = currentRoute.snapshot.data['name'];
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(829),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/app.component.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_confirm_dialog_confirm_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_page_not_found_page_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schedule_page_schedule_page_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_page_todo_page_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_page_settings_page_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__subject_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__subject_list_page_subject_list_page_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialog_service__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__schedule_page_schedule_page_component__["a" /* SchedulePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__todo_page_todo_page_component__["a" /* TodoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__settings_page_settings_page_component__["a" /* SettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__subject_list_page_subject_list_page_component__["a" /* SubjectListPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dialog_confirm_dialog_confirm_component__["a" /* DialogConfirmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_16__settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_18__dialog_service__["a" /* DialogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__dialog_confirm_dialog_confirm_component__["a" /* DialogConfirmComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/app.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.loginForm = this.fb.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    LoginComponent.prototype.doLogin = function (event) {
        console.log(event);
        console.log(this.loginForm.value);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'login',
            template: __webpack_require__(832),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/login.component.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(name, dueDay, dueMonth, dueYear, format) {
        this.name = name;
        this.dueDay = dueDay;
        this.dueMonth = dueMonth;
        this.dueYear = dueYear;
        this.completed = false;
        this.description = "";
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; // January is 0.
        var yyyy = today.getFullYear();
        var ddStr = dd.toString();
        var mmStr = mm.toString();
        var yyyyStr = yyyy.toString();
        if (dd < 10) {
            ddStr = "0" + dd;
        }
        if (mm < 10) {
            mmStr = "0" + mm;
        }
        this.createdDay = ddStr;
        this.createdMonth = mmStr;
        this.createdYear = yyyyStr;
        switch (format) {
            case 'dd/mm/yyyy':
                this.formatddmmyyyy();
                break;
            case 'mm/dd/yyyy':
                this.formatmmddyyyy();
                break;
            case 'dd/mm/yy':
                this.formatddmmyy();
                break;
            case 'mm/dd/yy':
                this.formatmmddyy();
                break;
            case 'dd/mm':
                this.formatddmm();
                break;
            case 'mm/dd':
                this.formatmmdd();
        }
    }
    Task.prototype.formatddmmyyyy = function () {
        this.createdDate = this.createdDay + "/" + this.createdMonth + "/" + this.createdYear;
        this.dueDate = this.dueDay + "/" + this.dueMonth + "/" + this.dueYear;
    };
    Task.prototype.formatddmmyy = function () {
        this.createdDate = this.createdDay + "/" + this.createdMonth + "/" + this.createdYear.slice(2, 4);
        this.dueDate = this.dueDay + "/" + this.dueMonth + "/" + this.dueYear.slice(2, 4);
    };
    Task.prototype.formatmmddyyyy = function () {
        this.createdDate = this.createdMonth + "/" + this.createdDay + "/" + this.createdYear;
        this.dueDate = this.dueMonth + "/" + this.dueDay + "/" + this.dueYear;
    };
    Task.prototype.formatmmddyy = function () {
        this.createdDate = this.createdMonth + "/" + this.createdDay + "/" + this.createdYear.slice(2, 4);
        this.dueDate = this.dueMonth + "/" + this.dueDay + "/" + this.dueYear.slice(2, 4);
    };
    Task.prototype.formatddmm = function () {
        this.createdDate = this.createdDay + "/" + this.createdMonth;
        this.dueDate = this.dueDay + "/" + this.dueMonth;
    };
    Task.prototype.formatmmdd = function () {
        this.createdDate = this.createdMonth + "/" + this.createdDay;
        this.dueDate = this.dueMonth + "/" + this.dueDay;
    };
    return Task;
}());
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/task.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=H:/Documents/programming/UniBuddy/src/environment.js.map

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "div.container {\n  position: absolute;\n  top: 58px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 10px; }\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = ".button-container {\n  text-align: center;\n  list-style-type: none;\n  color: blue;\n  padding-bottom: 10px; }\n\n.list-group-item {\n  text-align: center; }\n\n.subject-item {\n  text-align: center;\n  border: none;\n  background-color: transparent; }\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ".due-date {\n  max-width: 60px;\n  color: grey;\n  font-size: 11px;\n  background-color: transparent;\n  border: none;\n  display: inline-block; }\n\n.subject-name {\n  background-color: transparent;\n  border: none;\n  display: inline-block; }\n\n.add-new-task-button {\n  padding-left: 43px; }\n\n.add-form {\n  background-color: #f0f0f0; }\n\n.add-date {\n  max-width: 90px;\n  color: grey;\n  font-size: 11px;\n  background-color: transparent;\n  border: 1px solid orange;\n  display: inline-block; }\n\n.add-name {\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n  border: 1px solid orange; }\n\n.subject-form-button {\n  max-width: 310px; }\n\n.tick-button {\n  background-color: green;\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 10px;\n  width: 200px;\n  max-width: 200px; }\n\n.cancel-button {\n  background-color: red;\n  color: white; }\n\nli.item-container {\n  border: none;\n  padding-top: 10px;\n  padding-bottom: 5px; }\n\nli.list-group-item {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 12px;\n  padding-right: 0;\n  border: none; }\n\np {\n  padding: 0;\n  margin: 0; }\n\n.input-group-addon {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 0;\n  padding-bottom: 0; }\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n\t<md-toolbar color=\"primary\">\n\t\t<span flex></span>\n\t\t<button md-icon-button (click)=\"leftSide.open()\">\n\t\t\t<md-icon>menu</md-icon>\n\t\t</button>\n\t\t<div style=\"position: absolute; left: 50%;\">\n\t\t\t<div class=\"md-title\" style=\"position: relative; left: -50%;\">\n\t\t\t\t{{ title }}\n\t\t\t</div>\n\t\t</div>\n\t</md-toolbar>\n\t<md-sidenav #leftSide>\n\t\t<md-list>\n\t\t\t<h3>Links</h3>\n\t\t\t<md-list-item *ngFor=\"let route of routeList\">\n\t\t\t\t<button md-button routerLink=\"{{ route.routerLink }}\" (click)=\"leftSide.close()\">{{ route.name }}</button>\n\t\t\t</md-list-item>\n\t\t</md-list>\n\t</md-sidenav>\n\t<div class=\"container\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</md-sidenav-container>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<p><b>{{ title }}</b></p>\n\t<p>{{ message }}</p>\n\t<button type=\"button\" md-raised-button \n\t    (click)=\"dialogRef.close(true);removeSubjectDialog()\">OK</button>\n\t<button type=\"button\" md-button \n\t    (click)=\"dialogRef.close()\">Cancel</button>\n</div>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<login></login>\t\n</div>\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin($event)\">\n    <input formControlName=\"email\" type=\"email\" placeholder=\"Your email\">\n    <input formControlName=\"password\" type=\"password\" placeholder=\"Your password\">\n  \t<button type=\"submit\">Log in</button>\n</form>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<p>\n\t  not-found-page works!\n\t</p>\n</div>"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<p>\n\t  schedule-page works!\n\t</p>\n</div>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<div class=\"col-md-3\">\n        <label  class=\"control-label\">Date format</label><br />\n        <select  friendly-name=\"Year\" id=\"year\" name=\"year\" class=\"col-md-6 form-control\" [(ngModel)]=\"dateFormat\" ng-required=\"true\" (change)=\"firstDropDownChanged($event.target.value)\" >\n\t\t\t<option>dd/mm</option>\n\t\t\t<option>mm/dd</option>\n            <option>dd/mm/yyyy</option>\n\t\t\t<option>mm/dd/yyyy</option>\n\t\t\t<option>dd/mm/yy</option>\n\t\t\t<option>mm/dd/yy</option>\n        </select>\n    </div>\n</div>"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"button-container\">\n\t\t\t<button md-mini-fab color=\"primary\" *ngIf=\"adding==false\" (click)=\"toggleAdding()\"><md-icon>add</md-icon></button>\t\n\t\t\t<button md-mini-fab color=\"secondary\" *ngIf=\"adding==true\" (click)=\"toggleAdding()\"><md-icon>remove</md-icon></button>\n\t\t</li>\n\t\t<li class=\"list-group-item\" *ngIf=\"subjects.length==0&&adding==false\">\n\t\t\tCurrently no subjects\n\t\t</li>\n\t\t<li *ngIf=\"adding==true\" class=\"list-group-item\">\n\t\t\t<input md-input autofocus placeholder=\"Subject name\" type=\"text\" [(ngModel)]=\"subjectToBeAdded\" (keyup.enter)=\"addSubject()\"><span class=\"float-right green-text\"><a (click)=\"addSubject()\"><md-icon>done</md-icon></a></span>\n\t\t</li>\n\t\t<li *ngFor=\"let subject of subjects\" class=\"list-group-item\">\n\t\t\t<input md-input disabled class=\"subject-item\" type=\"text\" value=\"{{ subject['name'] }}\" ><span class=\"float-right\"><a (click)=\"removeSubject(subject)\"><md-icon>remove</md-icon></a></span>\n\t\t</li>\n\t</ul>\n\n</div>"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"padding-bottom\">\n\t\t\t<h2 class=\"padding-left\"> ALL</h2>\n\t\t\t<button md-button disabled *ngIf=\"anySelected()==false\">Remove Selected</button>\n\t\t\t<button md-button *ngIf=\"anySelected()==true\" (click)=\"removeSelected()\">Remove Selected</button>\n\t\t\t<md-divider></md-divider>\n\t\t</li>\n\t\t<li class=\"list-group-item center-text\" *ngIf=\"subjects.length==0\">\n\t\t\tAdd a subject in 'Subject List'\n\t\t</li>\n\t\t<li class=\"list-group-item item-container\" *ngFor=\"let subject of subjects\">\n\t\t\t<b>{{ subject.name }}</b>\n\t\t\t<ul class=\"list-group padding-top\">\n\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let task of subject.tasks\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input class=\"due-date\" disabled value=\"{{ task['dueDate'] }}\"><md-checkbox class=\"inline-block\" [(ngModel)]=\"task.completed\"></md-checkbox>\n\t\t\t\t\t\t<input class=\"subject-name\" md-input disabled value=\"{{ task['name'] }}\">\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item toolbar-color\" *ngIf=\"subject.open==undefined||subject.open==false\">\n\t\t\t\t\t<div class=\"add-new-task-button\">\n\t\t\t\t\t\t<button md-button (click)=\"toggleInput(subject)\">\n\t\t\t\t\t\t\t<md-icon>control_point</md-icon>\n\t\t\t\t\t\t\t<span> Add new task</span>\t\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\" *ngIf=\"subject.open == true\">\n\t\t\t\t\t<div class=\"padding add-form\">\n\t\t\t\t\t\t<input [(ngModel)]=\"dateString\" type=\"date\" class=\"add-date\">\n\t\t\t\t\t\t<input [(ngModel)]=\"taskToBePushed\" class=\"add-name\" (keyup.enter)=\"pushTask(subject)\" md-input autofocus placeholder=\" Enter task name\">\n\t\t\t\t\t\t<div class=\"padding-top subject-form-button\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon tick-button\" id=\"basic-addon2\" (click)=\"pushTask(subject)\"><md-icon>check</md-icon></span>\n\t\t\t\t\t\t\t<span class=\"input-group-addon cancel-button\" id=\"basic-addon2\" (click)=\"toggleInput(subject)\"><md-icon>clear</md-icon></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(505);


/***/ })

},[881]);
//# sourceMappingURL=main.bundle.map