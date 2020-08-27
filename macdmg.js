// Module imports
const createDMG = require("electron-installer-dmg")
const fs = require("fs")
const path = require("path")
let cwd

// Changes working directory to builds dir
try {
	process.chdir('./builds/lightcord-darwin-x64')
	cwd = process.cwd()
} catch (err) {
	console.log('chdir failed: ' + err)
}


// Makes a LICENSE directory to be put into the DMG


fs.mkdir(path.join(".", 'LICENSES'), {recursive: true}, err => {
	console.log("mkdir failed: " + err)
})

try {
	fs.copyFile(path.join("LICENSE"), path.join(".", "LICENSES", "LICENSE"), () => {
	})
	fs.copyFile(path.join("LICENSES.chromium.html"), path.join(".", "LICENSES", "LICENSES.chromium.html"), () => {
	})
} catch {
}


// Creates the Diskimage with settings defined in the first section
createDMG({
	"appPath": "./lightcord.app",
	"name": "Lightcord",
	"title": "Lightcord",
	"background": "../../assets/dmgbackground.png",
	"icon": "../../discord.png",
	"overwrite": true,
	"out": "../",
	"contents": function(opts){
		return [{x: 448, y: 364, type: 'link', path: '/Applications'},
			{x: 192, y: 364, type: 'file', path: opts.appPath},
			{x: 329, y: 270, type: 'file', path: path.join(cwd, 'LICENSES')}
		]}

}, function done(err) {
}).then(() => console.log("Package built!"))
