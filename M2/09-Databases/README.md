# FUNDAMENTOS DE BASESD DE DATOS
---

## Formatos de almacenamiento

### JSON - JavaScript Object Notation

```json
[
  {
    "name": "Lisa Simpson",
    "email": "lisa@gmail.com",
    "telephone": {
      "phone": "123-456",
      "cell": "15 123-456"
    }
  }
]
```

### XML - EXtensible Markup Language

- Lenguaje de marcado que utiliza etiquetas para organizar datos de forma jerárquica y estructurada.

```xml
<contacts>
  <contact>
    <name>Lisa Simpson</name>
    <email>lisa@gmail.com</email>
    <telephone>
      <phone>123-456</phone>
      <cell>15 123-456</cell>
    </telephone>
  </contact>
</contacts>
```

### CSV - Comma Separated Values

- En este formato, cada línea representa un registro y los valores de cada campo están separados por comas. El primer renglón suele contener los nombres de los campos, y el segundo los valores.

```csv
name,email,phone,cell
Lisa Simpson,lisa@gmail.com,123-456,"15 123-456"
```

### YAML - YAML Ain't Markup Language

- En YAML, se utiliza la indentación para definir la jerarquía de los datos y organizarlas, se centra en la legibilidad.

```yaml
- name: Lisa Simpson
  email: lisa@gmail.com
  telephone:
    phone: 123-456
    cell: 15 123-456
```

### BSON - Binary JSON

- Es un formato de serialización de datos similar a JSON, pero en formato binario.
- En BSON, los datos se representan en formato binario, lo que lo hace más eficiente para almacenar y transmitir datos en comparación con JSON.
- Es utilizado en MongoDB.

```bson
\x16\x00\x00\x00
\x02name\x00\x0C\x00\x00\x00Lisa Simpson\x00
\x02email\x00\x0F\x00\x00\x00lisa@gmail.com\x00
\x04telephone\x00
\x10\x00\x00\x00
\x02phone\x00\x07\x00\x00\x00123-456\x00
\x04cell\x00\x0B\x00\x00\x0015 123-456\x00
\x00
```

### Protobuf - Protocol Buffers

- Es un formato desarrollado por Google que permite la serialización eficiente de datos estructurados.
- Es eficiente en términos de espacio y velocidad.

```protobuf
protobuf
syntax = "proto3";

message Telephone {
  string phone = 1;
  string cell = 2;
}

message Contact {
  string name = 1;
  string email = 2;
  Telephone telephone = 3;
}
```
