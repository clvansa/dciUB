## Übungsworkflow

1. Klicke auf den Link in Slack
2. In Github, klick auf "clone or download", und kopiere den **ssh** link.
3. Navigiere in deiner Konsole zu deinem Desktop. (```cd```)
4. ```git clone <githublink>```
5. ```cd``` in den runter geladenen Ordner
6. Erstelle einen neuen Branch mit deinem Namen ```git branch <dein name>```
7. Wechsel in diesen Branch ```git checkout <branch name>```
8. _Mach die Übung._
9. Wenn du fertig bist, bereite mit ```git add .``` einen Commit vor.
10. Mach den Commit ```git commit -m "<Commit message>"```
11. pushe deinen Branch ```git push -u <branch name>```
12. Folge dem Link auf der Konsole und Öffne einen Pull Request.


Tricks:
1. Wenn du wissen willst was git gerade tut: ```git status```
2. Wenn du wissen willst auf welcher Branch du gerade bist: ```git branch```
3. Wenn du wissen willst in welchem Ordner du dich gerade befindest: ```pwd```
4. Wenn du wissen willst welche Unterordner und Dateien es gibt: ```ls -a```