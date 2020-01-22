# Neuer Befehl

* für remote
for remote in `git branch -r `; do git branch --track $remote; done