class codigo:
    nome = str
    sexo = str
    idade = int
    raca = str


    def dormir (self):
        return f'{self.nome} está dormindo'

    def __str__(self):
        return f'Este é {self.nome}, da raça {self.raca},{self.sexo} com {self.idade} anos.'

teste = codigo ()
teste.nome = 'boby'
teste.sexo = 'macho'
teste.idade = 10
teste.raca = 'dog alemão'
print (teste)





teste1 = codigo ()
teste1.nome = 'thuthucão'
teste1.sexo = 'macho'
teste1.idade = 15
teste1.raca = 'Pitybuul'
print (teste1.dormir())