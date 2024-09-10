<?php
include_once("conexao.php");

//recupera os dados do formulário e armazena nas variuáveis 
// $nomeP e $idadeP
$nomeP = $_POST["nome_pessoa"];
$idadeP = $_POST["idade_pessoa"];


$sql = "INSERT INTO pessoa(nome, idade)
VALUES ('$nomeP', '$idadeP') ";

if (mysqli_query ($conn, $sql)) {
  echo "Adicionado";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$conn->close();
?>
