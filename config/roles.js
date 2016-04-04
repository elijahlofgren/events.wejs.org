module.exports = {
'roles': {
	'administrator': {
		'name': 'administrator',
		'permissions': []
	},
	'authenticated': {
		'name': 'authenticated',
		'permissions': [
			'use_flag',
			'use_follow',
			'find_event',
			'find_image',
			'upload_image',
			'find_file',
			'upload_file',
			'find_user_image',
			'find_term',
			'find_vocabulary',
			'find_cfspeaker',
			'find_cftopic',
			'find_cfmenu',
			'find_cfpage',
			'find_cfnews',
			'find_cfroom',
			'find_cfsession',
			'find_cfpartner',
			'find_cfvideo',
			'find_cfcontact',
			'find_menu',
			'find_link',
			'find_urlAlias',
			'find_user'
		],
		'isSystemRole': true
	},
	'unAuthenticated': {
		'name': 'unAuthenticated',
		'permissions': [
			'use_follow',
			'use_flag',
			'find_event',
			'find_image',
			'find_file',
			'find_user_image',
			'find_term',
			'find_vocabulary',
			'find_cfspeaker',
			'find_cftopic',
			'find_cfmenu',
			'find_cfpage',
			'find_cfnews',
			'find_cfroom',
			'find_cfsession',
			'find_cfpartner',
			'find_cfvideo',
			'find_cfcontact',
			'find_menu',
			'find_link',
			'find_urlAlias'
		],
		'isSystemRole': true
	},
	'owner': {
		'name': 'owner',
		'permissions': [
			'find_user',
			'update_user',
			'delete_user',
			'update_event',
			'manage_event',
			'crop_image',
			'delete_image',
			'delete_file',
			'update_term',
			'find_cfregistration'
		],
		'isSystemRole': true
	},
	'eventManager': {
		'name': 'eventManager',
		'isSystemRole': true,
		'permissions': [
			'find_event',
			'update_event',
			'manage_event',
			'manage_widget',
			'cfpage-edit-field-createdAt',
			'cfpage-edit-field-updatedAt',
			'cfvideo-edit-field-createdAt',
			'cfvideo-edit-field-updatedAt',
			'create_cfspeaker',
			'update_cfspeaker',
			'delete_cfspeaker',
			'create_cftopic',
			'update_cftopic',
			'delete_cftopic',
			'create_cfmenu',
			'update_cfmenu',
			'delete_cfmenu',
			'create_cfpage',
			'update_cfpage',
			'delete_cfpage',
			'create_cfnews',
			'update_cfnews',
			'delete_cfnews',
			'create_cfregistration',
			'update_cfregistration',
			'delete_cfregistration',
			'create_cfregistrationtype',
			'update_cfregistrationtype',
			'delete_cfregistrationtype',
			'create_cfroom',
			'update_cfroom',
			'delete_cfroom',
			'create_cfsession',
			'update_cfsession',
			'delete_cfsession',
			'create_cfpartner',
			'update_cfpartner',
			'delete_cfpartner',
			'create_cfvideo',
			'update_cfvideo',
			'delete_cfvideo',
			'create_cfcontact',
			'update_cfcontact',
			'delete_cfcontact',
			'create_context_widget',
			'find_cfregistrationtype',
			'find_cfregistration'
		]
	}
}
};