# Welcome to Angular Boot Camp

## Agenda

The agenda varies over time, your instructor will adjust it to match
the needs of the class and the ongoing changes in the Angular
ecosystem. Here is a rough idea of the overall agenda:

* Basics of Angular - core vocabulary to build components
* Structuring a Substantial Angular Application
* Development / Build Tooling (at minimum, Angular-CLI)
* Advanced and Varied Features - that are OK to learn later
* Examples, Details, Surrouding ecosystem

## Workshops

The instructor may have changes to the workshops, as our curriculum is
under continuous improvement and is adjusted for the needs of each
class.

## Online (Cloud 9 IDE) Development

The fastest way to get started, without any local tool installation,
is to set up a Cloud 9 instance (as described in the pre-class
information, for online classes), then run this command (the
**entire** line) in the Command Line section of your Cloud 9
workspace:

```
source <(curl -s https://angularbootcamp.com/c9a2)
```

This will install and configure the software, and start "live-server"
serving the class content.

See the file ```entering-the-command.png``` to clarify where to type
the above command.

## Local Development

### Install Node (which includes NPM)

https://nodejs.org/en/

Choose the current (6.7 or later) version. Angular official
prerequisites are Node 6.x or higher, not Node 4.x. Note that much of
the Angular related tooling does work with 4.x, for organizations that
have obstacles from upgrading right away.

There is an important security problem with Node prior to 6.7 or 4.6,
so if you are using an older version them one of those, consider
upgrading now.

Installers are available for Windows and Mac; on Linux you can likely
obtain it using your package manager easily. We also strongly
recommend using NVM on Linux, to simplify keeping up-to-date on Node
even if your distribution is not the very latest.

### Download and unzip the course materials

Download the following:

https://angularbootcamp.com/learn2.zip

Then unzip it. Put the files anywhere convenient on your computer.

### IDE Type Support and Web Server

NPM install will bring in all the typings you need, Along with a Web
server that can be used. CD to the learn2 directory (the result of
unzipping the file you downloaded) and type this command:

```
npm install
```

If you are unable to perform this install on your machine, read on.

### Serve the files

**Important**: Serve the "learn2" directory as your "web root". You
will not need to restart your web server as we move from one step to
the next, and each example will be able to see the shared library
files and data files.

Navigate to the learn2 directory (cd learn2), then run the server:

```
npm start
```

If you are unable to use the NPM base configuration we are provided,
you can still get through most of the content of the course. Simply
set up whatever Web server you can run, to serve the contents of the
learn2 directory.

## Introduction to "learn2" - the first part of the class

This is a standalone, ready-to-use set of files, sufficient for
starting the class. The only tools truly necessary for this portion
are a text editor and a web server.

You need to serve these files via a web server; for most exercises, it
will not work acceptably to load them directly from "file" URLs. You
might already have a web server on your machine that can be used, or
your IDE might contain a web server.

Live server conveniently includes "live reload" in the box. It will
automatically inject pages it serves with a bit of JavaScript to
access a web socket to automatically reload the page when the source
files change. This means you will not have to click refresh in the
browser.
