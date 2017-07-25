var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML;
            (function (PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML) {
                var injectorCounter = 0;
                function ResetInjector() {
                    injectorCounter = 0;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ResetInjector = ResetInjector;
                function injectorReady() {
                    return injectorCounter === 0;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.injectorReady = injectorReady;
                function ParseElement(el, target) {
                    var arr = [];
                    if (!el || !el.hasChildNodes())
                        return;
                    var nodes = el.children;
                    for (var i = 0; i < nodes.length; i++) {
                        var tempNode = void 0;
                        if (nodes.item(i).nodeName.toLowerCase() === 'script') {
                            tempNode = createScriptNode(nodes.item(i));
                        }
                        else {
                            tempNode = nodes.item(i).cloneNode(true);
                        }
                        target.appendChild(tempNode);
                        arr.push(tempNode);
                    }
                    return arr;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ParseElement = ParseElement;
                function createScriptNode(refNode) {
                    var script = document.createElement('script');
                    var attr = refNode.attributes;
                    for (var i = 0; i < attr.length; i++) {
                        script.setAttribute(attr[i].name, attr[i].textContent);
                        if (attr[i].name.toLowerCase() === 'src') {
                            // waiting only for src to finish loading
                            injectorCounter++;
                            script.onload = function () {
                                injectorCounter--;
                            };
                        }
                    }
                    script.innerHTML = refNode.innerHTML;
                    return script;
                }
                function RunHTMLWidgetRenderer() {
                    var intervalVar = window.setInterval(function () {
                        if (injectorReady()) {
                            window.clearInterval(intervalVar);
                            if (window.hasOwnProperty('HTMLWidgets') && window['HTMLWidgets'].staticRender) {
                                window['HTMLWidgets'].staticRender();
                            }
                        }
                    }, 100);
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.RunHTMLWidgetRenderer = RunHTMLWidgetRenderer;
            })(PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML || (visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML;
            (function (PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML) {
                /**
                 * Gets property value for a particular object.
                 *
                 * @function
                 * @param {DataViewObjects} objects - Map of defined objects.
                 * @param {string} objectName       - Name of desired object.
                 * @param {string} propertyName     - Name of desired property.
                 * @param {T} defaultValue          - Default value of desired property.
                 */
                function getValue(objects, objectName, propertyName, defaultValue) {
                    if (objects) {
                        var object = objects[objectName];
                        if (object) {
                            var property = object[propertyName];
                            if (property !== undefined) {
                                return property;
                            }
                        }
                    }
                    return defaultValue;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue = getValue;
                /**
                 * Gets property value for a particular object.
                 *
                 * @function
                 * @param {DataViewObjects} objects - Map of defined objects.
                 * @param {string} objectName       - Name of desired object.
                 * @param {string} propertyName     - Name of desired property.
                 * @param {T} defaultValue          - Default value of desired property.
                 */
                function getValueMinMax(objects, objectName, propertyName, defaultValue, minVal, maxVal) {
                    if (objects) {
                        var object = objects[objectName];
                        if (object) {
                            var property = object[propertyName];
                            if (property < minVal) {
                                return minVal;
                            }
                            if (property > maxVal) {
                                return maxVal;
                            }
                            if (property !== undefined) {
                                return property;
                            }
                        }
                    }
                    return defaultValue;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValueMinMax = getValueMinMax;
                /**
                * Gets property value for a particular object.
                *
                * @function
                * @param {DataViewObjects} objects - Map of defined objects.
                * @param {string} objectName       - Name of desired object.
                * @param {string} propertyName     - Name of desired property.
                * @param {T} defaultValue          - Default value of desired property.
                */
                function getValueNumberMinMax(objects, objectName, propertyName, defaultValue, minValue, maxValue) {
                    if (objects) {
                        var object = objects[objectName];
                        if (object) {
                            var property = object[propertyName];
                            if (property !== undefined) {
                                if (property > maxValue) {
                                    return maxValue;
                                }
                                if (property < minValue) {
                                    return minValue;
                                }
                                return property;
                            }
                        }
                    }
                    return defaultValue;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValueNumberMinMax = getValueNumberMinMax;
                /**
                     * Gets conditional property value for a particular object of type string
                     *
                     * @function
                     * @param {string} inVal     -  current value of parameter
                     * @param {string} contrVal   - control value
                     * @param {string} contrVal2Compare     - specific string to be compared with contrVal
                     * @param {boolean} logic          -  true / false "logic"
                     * @param {string} outValIfCondTrue          - output value if comparison (contrVal == contrVal2Compare) comes out as "logic"
                     */
                function ifStringReturnString(inVal, contrVal, contrVal2Compare, outValIfCondTrue, logic, applyNow) {
                    if (applyNow && contrVal == contrVal2Compare && logic == true)
                        return outValIfCondTrue;
                    if (applyNow && contrVal != contrVal2Compare && logic == false)
                        return outValIfCondTrue;
                    return inVal;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ifStringReturnString = ifStringReturnString;
                function ifStringReturnStringClustersMethod(numClustersMethods, numOfClusters) {
                    if (numOfClusters != "auto")
                        return "None";
                    if (numOfClusters == "auto" && numClustersMethods == "None")
                        return "fast";
                    return numClustersMethods;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ifStringReturnStringClustersMethod = ifStringReturnStringClustersMethod;
                function inMinMax(a, mi, ma) {
                    if (a < mi)
                        return mi;
                    if (a > ma)
                        return ma;
                    return a;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.inMinMax = inMinMax;
                /**
                 * Gets property value for a particular object in a category.
                 *
                 * @function
                 * @param {DataViewCategoryColumn} category - List of category objects.
                 * @param {number} index                    - Index of category object.
                 * @param {string} objectName               - Name of desired object.
                 * @param {string} propertyName             - Name of desired property.
                 * @param {T} defaultValue                  - Default value of desired property.
                 */
                function getCategoricalObjectValue(category, index, objectName, propertyName, defaultValue) {
                    var categoryObjects = category.objects;
                    if (categoryObjects) {
                        var categoryObject = categoryObjects[index];
                        if (categoryObject) {
                            var object = categoryObject[objectName];
                            if (object) {
                                var property = object[propertyName];
                                if (property !== undefined) {
                                    return property;
                                }
                            }
                        }
                    }
                    return defaultValue;
                }
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getCategoricalObjectValue = getCategoricalObjectValue;
            })(PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML || (visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML;
            (function (PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML) {
                // in order to improve the performance, one can update the <head> only in the initial rendering.
                // set to 'true' if you are using different packages to create the widgets
                var updateHTMLHead = false;
                var renderVisualUpdateType = [powerbi.VisualUpdateType.Resize, powerbi.VisualUpdateType.ResizeEnd, powerbi.VisualUpdateType.Resize + powerbi.VisualUpdateType.ResizeEnd];
                // USER - replace this block (END)
                var Visual = (function () {
                    // USER - replace this block (END)
                    function Visual(options) {
                        // HTML 
                        if (options && options.element)
                            this.rootElement = options.element;
                        this.headNodes = [];
                        this.bodyNodes = [];
                        // USER - replace this block (START)
                        // default parameters
                        this.settings_forecastPlot_params = {
                            forecastLength: 10,
                            confInterval1: "0.85",
                            confInterval2: "0.95"
                        };
                        this.settings_seasonality_params = {
                            show: true,
                            targetSeason: "automatic",
                            knownFrequency: 12,
                        };
                        this.settings_model_params = {
                            maxp: "3",
                            maxq: "3",
                            maxP: "2",
                            maxQ: "2",
                            maxd: "2",
                            maxD: "1",
                            allowDrift: true,
                            allowMean: true,
                            stepwiseSelection: true,
                            boxCoxTransform: "off",
                            lambda: 0.1,
                        };
                        this.settings_userModel_params = {
                            show: false,
                            p: "1",
                            q: "1",
                            P: "1",
                            Q: "1",
                            d: "1",
                            D: "0",
                        };
                        this.settings_graph_params = {
                            dataCol: "blue",
                            forecastCol: "orange",
                            percentile: 40,
                            weight: 10
                        };
                        this.settings_additional_params = {
                            show: true,
                            textSize: 12,
                            textColor: "brown",
                            infoCriteria: "none"
                        };
                        // USER - replace this block (END)
                    }
                    Visual.prototype.update = function (options) {
                        if (!options || !options.type || !options.viewport)
                            return;
                        var dataViews = options.dataViews;
                        if (!dataViews || dataViews.length === 0)
                            return;
                        var dataView = dataViews[0];
                        if (!dataView || !dataView.metadata)
                            return;
                        this.updateObjects(dataView.metadata.objects);
                        var payloadBase64 = null;
                        if (dataView.scriptResult && dataView.scriptResult.payloadBase64) {
                            payloadBase64 = dataView.scriptResult.payloadBase64;
                        }
                        if (renderVisualUpdateType.indexOf(options.type) === -1) {
                            if (payloadBase64) {
                                this.injectCodeFromPayload(payloadBase64);
                            }
                        }
                        this.onResizing(options.viewport);
                    };
                    // HTML 
                    Visual.prototype.onResizing = function (finalViewport) {
                        /* add code to handle resizing of the view port */
                    };
                    Visual.prototype.injectCodeFromPayload = function (payloadBase64) {
                        // Inject HTML from payload, created in R
                        // the code is injected to the 'head' and 'body' sections.
                        // if the visual was already rendered, the previous DOM elements are cleared
                        PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ResetInjector();
                        if (!payloadBase64)
                            return;
                        // create 'virtual' HTML, so parsing is easier
                        var el = document.createElement('html');
                        try {
                            el.innerHTML = window.atob(payloadBase64);
                        }
                        catch (err) {
                            return;
                        }
                        // if 'updateHTMLHead == false', then the code updates the header data only on the 1st rendering
                        // this option allows loading and parsing of large and recurring scripts only once.
                        if (updateHTMLHead || this.headNodes.length === 0) {
                            while (this.headNodes.length > 0) {
                                var tempNode = this.headNodes.pop();
                                document.head.removeChild(tempNode);
                            }
                            var headList = el.getElementsByTagName('head');
                            if (headList && headList.length > 0) {
                                var head = headList[0];
                                this.headNodes = PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ParseElement(head, document.head);
                            }
                        }
                        // update 'body' nodes, under the rootElement
                        while (this.bodyNodes.length > 0) {
                            var tempNode = this.bodyNodes.pop();
                            this.rootElement.removeChild(tempNode);
                        }
                        var bodyList = el.getElementsByTagName('body');
                        if (bodyList && bodyList.length > 0) {
                            var body = bodyList[0];
                            this.bodyNodes = PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.ParseElement(body, this.rootElement);
                        }
                        PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.RunHTMLWidgetRenderer();
                    };
                    /**
                            * This function gets called by the update function above. You should read the new values of the properties into
                            * your settings object so you can use the new value in the enumerateObjectInstances function below.
                            *
                            * Below is a code snippet demonstrating how to expose a single property called "lineColor" from the object called "settings"
                            * This object and property should be first defined in the capabilities.json file in the objects section.
                            * In this code we get the property value from the objects (and have a default value in case the property is undefined)
                            */
                    Visual.prototype.updateObjects = function (objects) {
                        // USER - replace this block (START)  
                        this.settings_forecastPlot_params = {
                            forecastLength: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_forecastPlot_params', 'forecastLength', 10),
                            confInterval1: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_forecastPlot_params', 'confInterval1', "0.85"),
                            confInterval2: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_forecastPlot_params', 'confInterval2', "0.95")
                        };
                        this.settings_seasonality_params = {
                            show: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_seasonality_params', 'show', true),
                            targetSeason: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_seasonality_params', 'targetSeason', "year"),
                            knownFrequency: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_seasonality_params', 'knownFrequency', 12),
                        };
                        this.settings_model_params = {
                            maxp: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'maxp', "3"),
                            maxq: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'maxq', "3"),
                            maxP: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'maxP', "2"),
                            maxQ: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'maxQ', "2"),
                            maxd: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'maxd', "2"),
                            maxD: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'maxD', "1"),
                            allowDrift: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'allowDrift', true),
                            allowMean: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'allowMean', true),
                            stepwiseSelection: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'stepwiseSelection', true),
                            boxCoxTransform: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'boxCoxTransform', "off"),
                            lambda: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_model_params', 'lambda', 0.1),
                        };
                        this.settings_userModel_params = {
                            show: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'show', false),
                            p: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'p', "1"),
                            q: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'q', "1"),
                            P: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'P', "1"),
                            Q: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'Q', "1"),
                            d: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'd', "1"),
                            D: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_userModel_params', 'D', "0"),
                        };
                        this.settings_graph_params = {
                            dataCol: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_graph_params', 'dataCol', "blue"),
                            forecastCol: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_graph_params', 'forecastCol', "orange"),
                            percentile: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_graph_params', 'percentile', 40),
                            weight: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_graph_params', 'weight', 10),
                        };
                        this.settings_additional_params = {
                            show: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_additional_params', 'show', true),
                            textSize: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_additional_params', 'textSize', 12),
                            textColor: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_additional_params', 'textColor', "brown"),
                            infoCriteria: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.getValue(objects, 'settings_additional_params', 'infoCriteria', "none")
                        };
                        // USER - replace this block (END)
                    };
                    Visual.prototype.enumerateObjectInstances = function (options) {
                        var objectName = options.objectName;
                        var objectEnumeration = [];
                        // USER - replace this block (START)
                        switch (objectName) {
                            case 'settings_forecastPlot_params':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        forecastLength: Math.round(PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.inMinMax(this.settings_forecastPlot_params.forecastLength, 1, 1000000)),
                                        confInterval1: this.settings_forecastPlot_params.confInterval1,
                                        confInterval2: this.settings_forecastPlot_params.confInterval2
                                    },
                                    selector: null
                                });
                                break;
                            case 'settings_seasonality_params':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.settings_seasonality_params.show,
                                        targetSeason: this.settings_seasonality_params.targetSeason,
                                    },
                                    selector: null
                                });
                                if (this.settings_seasonality_params.targetSeason == "manual") {
                                    objectEnumeration.push({
                                        objectName: objectName,
                                        properties: {
                                            knownFrequency: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.inMinMax(this.settings_seasonality_params.knownFrequency, 2, 1000000)
                                        },
                                        selector: null
                                    });
                                }
                                break;
                            case 'settings_model_params':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        maxp: this.settings_model_params.maxp,
                                        maxd: this.settings_model_params.maxd,
                                        maxq: this.settings_model_params.maxq
                                    },
                                });
                                if (this.settings_seasonality_params.show) {
                                    objectEnumeration.push({
                                        objectName: objectName,
                                        properties: {
                                            maxP: this.settings_model_params.maxP,
                                            maxD: this.settings_model_params.maxD,
                                            maxQ: this.settings_model_params.maxQ
                                        },
                                    });
                                }
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        allowDrift: this.settings_model_params.allowDrift,
                                        allowMean: this.settings_model_params.allowMean,
                                        boxCoxTransform: this.settings_model_params.boxCoxTransform,
                                    },
                                });
                                if (this.settings_model_params.boxCoxTransform == "manual") {
                                    objectEnumeration.push({
                                        objectName: objectName,
                                        properties: {
                                            lambda: PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.inMinMax(this.settings_model_params.lambda, -0.5, 1.5)
                                        },
                                    });
                                }
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        stepwiseSelection: this.settings_model_params.stepwiseSelection
                                    },
                                    selector: null
                                });
                                break;
                            case 'settings_userModel_params':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.settings_userModel_params.show,
                                        p: this.settings_userModel_params.p,
                                        d: this.settings_userModel_params.d,
                                        q: this.settings_userModel_params.q
                                    },
                                    selector: null
                                });
                                if (this.settings_seasonality_params.show) {
                                    objectEnumeration.push({
                                        objectName: objectName,
                                        properties: {
                                            P: this.settings_userModel_params.P,
                                            D: this.settings_userModel_params.D,
                                            Q: this.settings_userModel_params.Q
                                        },
                                        selector: null
                                    });
                                }
                                break;
                            case 'settings_graph_params':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        dataCol: this.settings_graph_params.dataCol,
                                        forecastCol: this.settings_graph_params.forecastCol,
                                        percentile: this.settings_graph_params.percentile,
                                        weight: this.settings_graph_params.weight
                                    },
                                    selector: null
                                });
                                break;
                            case 'settings_additional_params':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.settings_additional_params.show,
                                        textSize: this.settings_additional_params.textSize,
                                        textColor: this.settings_additional_params.textColor,
                                        infoCriteria: this.settings_additional_params.infoCriteria
                                    },
                                    selector: null
                                });
                                break;
                        }
                        ;
                        // USER - replace this block (END)
                        return objectEnumeration;
                    };
                    return Visual;
                }());
                PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.Visual = Visual;
            })(PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML || (visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML = {
                name: 'PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML',
                displayName: 'Forecasting with ARIMA',
                class: 'Visual',
                version: '1.0.1',
                apiVersion: '1.4.0',
                create: function (options) { return new powerbi.extensibility.visual.PBI_CV_AD348DC9_41C4_4867_B19O_53F9RDC6IEAS_HTML.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map