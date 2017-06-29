var methods = [];

for (var class_name in ObjC.classes) {

    if (class_name == "{{ classname }}") {

        // if we should include parent class methods, do that.
        if ("{{ include_parents }}" == "True") {
            var class_methods = eval('ObjC.classes.{{ classname }}.$methods');
        } else {
            var class_methods = eval('ObjC.classes.{{ classname }}.$ownMethods');
        }

        methods = class_methods
    }
}

var response = {
    status: "success",
    error_reason: NaN,
    type: "ios-classes",
    data: methods
}

send(JSON.stringify(response));
