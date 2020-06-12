import socket
# echo server
HOST = '127.0.0.1'  # localhost
PORT = 65432        # Port to listen 

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    conn, addr = s.accept()
    with conn:
        print('Connected by', addr)
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)

            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s: pass  # Use the socket object without calling s.close().

            HOST = '127.0.0.1'
            PORT = 65432        
            s.bind((HOST, PORT))

            s.listen()
            conn, addr = s.accept()
            with conn: print('Connected by', addr)
            while True: data = conn.recv(1024)
            if not data: 
                break 
            conn.sendall(data)

# echo client

import socket

HOST = '127.0.0.1'  # The server IP address or hostname
PORT = 65432        # The port used by the server

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    s.sendall(b'Hello, world')
    data = s.recv(1024)

print('Received', repr(data))

