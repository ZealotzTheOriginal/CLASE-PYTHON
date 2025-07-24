def sumar(a,b):
    return a+b

def restar(a,b):
    return a-b

def dividir(a,b):
    return a/b

def multiplicar(a,b):
    return a*b

def recoger():
    num1 = float(input('Introduce primer numero: '))
    num2 = float(input('Introduce segundo numero: '))
    return num1, num2

while True:
    print(f"1. SUMAR""\n"
          "2. RESTAR""\n"
          "3. DIVIDIR""\n"
          "4. MULTIPLICAR""\n"
          "5. SALIR""\n")

    opcion = int(input("Introduce una opcion: "))
    num1, num2 = recoger()

    if opcion == 1:
        print(sumar(num1,num2))

    if opcion == 2:
        print(restar(num1,num2))

    if opcion == 3:
        print(dividir(num1,num2))

    if opcion == 4:
        print(multiplicar(num1,num2))

    else:
        break