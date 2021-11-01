This is a fork of [MariaDB's NoSQL Listener example](https://github.com/MangoDB-io/dev-example-nosql-listener)
that replaces MariaDB MaxScale and MariaDB Community Server with
[MangoDB](https://github.com/MangoDB-io/MangoDB) and PostgreSQL.

# Quickstart

```
$ git clone https://github.com/MangoDB-io/example.git

$ cd example

$ docker-compose up -d
```

Then open [http://localhost:3000/](http://localhost:3000/) and use that example application.

If you have a recent enough `mongosh`, you can use to connect to MangoDB. For example:
[![asciicast](https://asciinema.org/a/BhBD85JpeLPHrSdyL1jzNFkFq.svg)](https://asciinema.org/a/BhBD85JpeLPHrSdyL1jzNFkFq)
You can see data in PostgreSQL using `psql`. For example:
[![asciicast](https://asciinema.org/a/RgCtFAxvkkp26YRBO6FPSpEUJ.svg)](https://asciinema.org/a/RgCtFAxvkkp26YRBO6FPSpEUJ)
