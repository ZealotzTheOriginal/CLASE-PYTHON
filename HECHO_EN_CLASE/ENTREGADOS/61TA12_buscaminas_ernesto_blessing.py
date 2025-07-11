import random

corde_v = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
corde_h = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]



# Variable global para el tablero
tablero = []



# Funcion que Inicia el Tablero
def initialize_tablero():
    """Inicializa un nuevo tablero de juego vacío con '·'."""
    global tablero
    tablero = []
    for _ in range(len(corde_v)):
        tablero.append(["·"] * len(corde_h))



# Funcion para pintar el Tablero
def print_grid(tablero_en_juego):
    """Imprime la cuadrícula con una alineación correcta."""
    print(" ", end="")
    for num in corde_h:
        print(f" {num}", end="")
    print()

    for i, letter in enumerate(corde_v):
        print(f"{letter} ", end="")
        for j, cell in enumerate(tablero_en_juego[i]):
            print(f"{cell} ", end="")
        print()


# Funcion para colocar las minas
def mina(tablero_en_juego, num_minas=5):
    """Coloca un número específico de minas ('o') al azar."""
    minas_colocadas = 0
    while minas_colocadas < num_minas:
        random_row_index = random.randint(0, len(corde_v) - 1)
        random_col_index = random.randint(0, len(corde_h) - 1)
        if tablero_en_juego[random_row_index][random_col_index] != "∙":
            tablero_en_juego[random_row_index][random_col_index] = "∙"
            minas_colocadas += 1



# Funcion para ver las minas alrededor
def count_adjacent_mines(row, col, tablero_en_juego):
    """Cuenta el número de minas ('o') en las 8 casillas circundantes."""
    mine_count = 0
    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),          (0, 1),
        (1, -1), (1, 0), (1, 1)
    ]
    for dr, dc in directions:
        check_row, check_col = row + dr, col + dc
        if 0 <= check_row < len(corde_v) and 0 <= check_col < len(corde_h):
            if tablero_en_juego[check_row][check_col] == "∙":
                mine_count += 1
    return mine_count



# Funcion para revelar el mapa con casillas vacias
def reveal_adjacent_cells(row, col):
    """Revela recursivamente las celdas adyacentes a una celda vacía."""
    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),          (0, 1),
        (1, -1), (1, 0), (1, 1)
    ]
    for dr, dc in directions:
        check_row, check_col = row + dr, col + dc
        if 0 <= check_row < len(corde_v) and 0 <= check_col < len(corde_h):
            if tablero[check_row][check_col] == "·":
                mines_around = count_adjacent_mines(check_row, check_col, tablero)
                if mines_around > 0:
                    tablero[check_row][check_col] = str(mines_around)
                else:
                    tablero[check_row][check_col] = " "
                    reveal_adjacent_cells(check_row, check_col)



# Función que Marca una Casilla
def jugada_x(input_jugada_v, input_jugada_h):
    """
    Gestiona la jugada del usuario. Si golpea una mina, revela el tablero y termina el juego.
    """
    try:
        vertical_index = corde_v.index(input_jugada_v.upper())
        horizontal_index = corde_h.index(input_jugada_h)

        if 0 <= vertical_index < len(corde_v) and 0 <= horizontal_index < len(corde_h):
            
            # --- CONDICIONAL EDITADO ---
            if tablero[vertical_index][horizontal_index] == "∙":
                print("\n💥 ¡BOOM! ¡Has golpeado una mina! 💥")
                print("¡Juego terminado!")
                
                # Marca la mina que fue golpeada con un emoji de explosión
                tablero[vertical_index][horizontal_index] = "💥"
                
                # Imprime el tablero final revelado desde aquí
                print("\n--- Tablero Final ---")
                print_grid(tablero)
                return False  # Termina el juego

            elif tablero[vertical_index][horizontal_index] != "·":
                print("\n¡Esa posición ya ha sido revelada! Intenta otra.")
                print_grid(tablero) # Muestra el tablero de nuevo para que el jugador vea el estado actual
            else:
                mines_around = count_adjacent_mines(vertical_index, horizontal_index, tablero)
                if mines_around > 0:
                    tablero[vertical_index][horizontal_index] = str(mines_around)
                else:
                    tablero[vertical_index][horizontal_index] = " "
                    reveal_adjacent_cells(vertical_index, horizontal_index)
                print_grid(tablero) # Muestra el tablero actualizado

            return True  # El juego continúa
        else:
            print("Posición inválida. Por favor, introduce una letra y un número válidos.")
            return True
    except ValueError:
        print("Entrada inválida. Por favor, introduce una sola letra (A-I) y un solo número (1-9).")
        return True



# Funcion para iniciar el Tablero
def play_game():
    """Gestiona una ronda completa del juego."""
    initialize_tablero()
    mina(tablero, 5)

    print("\n¡Bienvenido al Buscaminas Básico!")
    print("Aquí está tu tablero inicial:")
    
    # Crea y muestra un tablero temporal vacío para el jugador
    initial_player_board = [["·"] * len(corde_h) for _ in range(len(corde_v))]
    print_grid(initial_player_board)

    while True:
        vertical_input = input("\nIntroduce una letra (A-I), o 'q' para salir: ")
        if vertical_input.lower() == 'q':
            print("Saliendo del juego. ¡Hasta luego!")
            break

        horizontal_input = input("Introduce un número (1-9): ")

        game_continues = jugada_x(vertical_input, horizontal_input)
        if not game_continues:
            # La lógica de impresión ya está en jugada_x, así que aquí solo rompemos el bucle.
            break



# Bucle principal del juego
while True:
    play_game()
    play_again = input("\n¿Quieres jugar de nuevo? (s/n): ")
    if play_again.lower() != 's':
        print("Gracias por jugar. ¡Adiós!")
        break