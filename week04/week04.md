##### Generating yr SSH key
See: https://help.github.com/en/articles/connecting-to-github-with-ssh

###### In order to upload files to your GitHub repo, you need to have set up an "SSH key" for the laptop you are working on.

This authenticates your connection to the server.

Generate an SSH key with
``` ssh-keygen -t rsa -b 4096 -C "yourEmailHere@theOneYouUsedForGithub.com" ```
You will receive prompts to rename, add passwords, etc... as part of the keygen process. **Don't add any inputs to those prompts – just hit enter to use the default (correct) inputs.**

See: https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key

This key file, on a Mac, is stored in the hidden folder ``` ~/.ssh/ ```

Please see https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account for Windows instructions.

* Navigate to the location of the file using Terminal with ``` cd ~/.ssh/ ```

* Copy the contents of id_rsa.pub either by writing ``` cat id_rsa.pub ``` and copying the output, or send it directly to your clipboard with ``` cat id_rsa.pub | pbcopy ```.

* Go to the "SSH and GPG Keys" section of your Github account via https://github.com/settings/keys + https://help.github.com/articles/generating-ssh-keys/


* Click "New SSH Key", add a title (This is just for you to identify what computer the Key belongs to, ex: "Personal Laptop 2019")

* Paste the public key and hit Save.


##### General work flow for saving and pushing your work back to github:

```
git status
git add .
git commit -m "I am saving my work. This is my commit message."
git status
git push origin master
```


You can check status any time, and it is not necessary but becomes a very good habit to maintain, as the complexity of your projects increase.

##### Design Resources:
Texts:
  * [Programming Design Systems](https://programmingdesignsystems.com/introduction/) - Rune Madsen
  * [Interaction of Color](https://www.amazon.com/Interaction-Color-Anniversary-Josef-Albers/dp/0300179359) - Josef Albers, 1963
* Good website design!
  * [SiteInspire](https://www.siteinspire.com)
  * [Brutalist Websites](http://brutalistwebsites.com)
  * [SiteSee](https://sitesee.co/)
  * [Awwwards](https://www.awwwards.com/websites/)
* Good web typography!  
  * [Google Font API](https://developers.google.com/fonts/)
  * [Google Chrome Plug-in - What Font is that?](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm)
  * [Typewolf](https://www.typewolf.com/)
  * [Fonts in Use](https://fontsinuse.com/)
  * [Canva - Font Pairing](https://www.canva.com/learn/the-ultimate-guide-to-font-pairing/)
  * [Canva - Font Pairing Tool](https://www.canva.com/font-combinations)
  * [Type.io](http://typ.io/)
