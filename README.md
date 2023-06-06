# Sujet de programmation fonctionnelle

La page du sujet :

https://www.labri.fr/perso/renault/working/teaching/projets/2022-23-S6-Js-Tower.php

La page sur thor :

https://thor.enseirb-matmeca.fr/ruby/projects/projetss6-tower/overview

# Liste des paquetages disponibles

* commander
* jest
* ts-jest
* @types/node
* @types/jest
* typescript
* eslint
* parcel
* @typescript-eslint/parser
* @typescript-eslint/eslint-plugin

Toute mise dans le dépôt de fichiers dans le répertoire `node_modules`
sera traité avec la sévérité la plus brute.




*
------------------------------------------------------------------------------------------------------------------------------
Authors :
        Abderahim LAGRAOUI
        Majid MEDGHALI
        Moussa ALLOUBANE
        Mohammed BOUHAJA
------------------------------------------------------------------------------------------------------------------------------

How to execute the game? => make clean; make build; make run

->make build: converts files with the .ts extension to .js files in the dist directory
->make run: executes the game by tracing a random path
->make clean: deletes all files from the dist directory and the *~ files generated by make build and make run

To run tests: make test
make test: executes the tests and displays the percentage of tested lines for each file

Note:
Running make run successively generates a different path each time.