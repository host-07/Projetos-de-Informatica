from abc import ABC ,abstractmethod

class Animal (ABC):
    tamanho : str
    cor : str

    def comer():
        return 'nhac nhac'

    @abstractmethod
    def informacoes ():
        pass
