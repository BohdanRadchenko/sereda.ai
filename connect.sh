ssh root@134.209.246.53
HdVhhZ*5nuG92ED

cd sereda.ai

see ssh gpg
https://gist.github.com/paolocarrasco/18ca8fe6e63490ae1be23e84a7039374?permalink_comment_id=3767413#gistcomment-3767413

export GPG_TTY=$(tty)

ssh-add -L

eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519