<?php
include_once("conexao.php");

$sql = "SELECT id, nome, idade FROM pessoa";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Nome: " . $row["nome"]. " - Idade:" . $row["idade"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>