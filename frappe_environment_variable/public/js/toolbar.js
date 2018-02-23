$(document).on('app_ready', function() {
	// switch language button
	$('<li><a href="#" onclick="_check_environ_var()">Check Environment Variable</a></li>').insertAfter($('.navbar-set-desktop-icons').next());
});

var _check_environ_var = function() {
	frappe.prompt({fieldtype:"Data", fieldname: "variable", label: __("Environment Variable"), reqd: 1},
				function(data) {
					frappe.call({
						method: "frappe_environment_variable.check",
						args: {
							variable: data.variable
						},
						callback: function(r) {
							if (r.message) {
								frappe.msgprint(r.message);
							} else
								frappe.msgprint("No response")
						}
					});				
				}, "Check Environment Variable", "Check");
}