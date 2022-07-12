Challenge Oracle ONE Sprint 01:
Construir um decodificador de texto com Javascript

![Captura de tela 2022-06-02 205755](https://user-images.githubusercontent.com/106345689/171759302-01b699ff-af56-45e5-b900-bd5238bf5637.png)
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="stylesheet" href="style_decodificador.css">
	<script type="text/javascript" src="botão_copia.js"></script>

	<title>Decodificador</title>
</head>
<body>
	<header>		
		<h1><img src="logoalura.png" alt="Logo da alura com inicial da letra a"></h1>
		<h6 class="descricao">Digite um texto que você deseja Criptografar ou Descriptografar.</h6>
	</header>

	<main class="main">
		<section>
        <textarea class="input-texto" cols="40" rows="6" placeholder="Digite seu texto:"></textarea>
        <input type="hidden" class="input-original-oculto">
        <div>
            <h6 class="informacao">Apenas letras maiúsculas e minúsculas</h6>
        </div>
        <div class="botoes">
            <button class="encriptar" onclick="btnEncriptar()">
                Criptografar   
            </button>
            <button class="desencriptar" onclick="btnDesencriptar()">
                Descriptografar
            </button>
            
           

        </div>

        </section>
       
        		
        	

        <section>
        <textarea class="mensagem" cols="18" rows="8">
			
        </textarea>
        
        <button class="copiar" onclick="btnCopiar()">
        	Copiar
        </button>
        </section>
        
    </main>
    <script src="script_decodificador.js"></script>

		
	</main>

	<footer>
		<img src="logoalura.png" alt="Logo da alura com inicial da letra a">
		<p class="copyright">&copy; Marcos Tassoni - 2022</p>
	</footer>
</body>
</html>
