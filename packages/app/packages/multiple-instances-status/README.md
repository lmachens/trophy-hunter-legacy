This package allows track online app instances.

If you run a project using clustering, you can use all your CPU power but you can't know how many or which instances are online.

With this package all instances will be registered in a collection named *instances* with a *unique id* and each instance will update his record every 2 seconds. The collection will expire all records which that wasn't updated in 60 seconds.

Each instance will be unregistered on process exit too.

You can observe changes to be notified for every deleted instance.

## Use case
[lmachens:user-presence](https://github.com/Konecty/meteor-user-presence) use this package to track connections of users in multiple instances, so each connection is attached to one instance and when one instance drop we can remove all saved user status for this instance because these connections will not be used anymore.
When a instance start again we remove all connections when connection id isn't in a list of instance ids, so we can remove all lost data.

## How to use

#### Add package
```shell
meteor add lmachens:multiple-instances-status
```

#### And register your instace with the name you want
```javascript
//SERVER
Meteor.startup(function() {
	InstanceStatus.registerInstance('Test');
});
```

#### Get instance id
```javascript
//SERVER
var instanceId = InstanceStatus.id();
```

#### Observer for new and deleted servers
```javascript
//SERVER
InstanceStatus.getCollection().find({}).observeChanges({
	added: function(id) {
		console.log('New Instance:', id);
	},
	removed: function(id) {
		console.log('Deleted Instance:', id);
	}
});
````

#### Logs
```javascript
//SERVER
InstanceStatus.activeLogs();
```
