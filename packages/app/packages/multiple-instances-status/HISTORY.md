# 1.0.3 (2014-01-22)
* Change defaultPingInterval from 5s to 2s and Instance TTL from 10s to 60s
* Save name and extraInformation in InstaceStatus object
* Register instance again if no instance was updated on ping
* Fix spelling
* Register pid with instance information
* Emit events on registerInstance and unregisterInstance

# 1.0.4 (2016-01-26)
* Use $currentDate to set correct date into MongoDB

# 1.0.5 (2016-01-26)
* Fix error introduced by previous commit when extraInformation is setted

# 1.0.6 (2016-01-30)
* Closes #1; Can't add package on Windows 10
