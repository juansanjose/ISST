create table usuarios(
    nombreusuario varchar_ignorecase(50) not null primary key,
    password varchar_ignorecase(200) not null,
    enabled boolean not null
);

create table roles(
    nombreusuario varchar_ignorecase(50) not null,
    rolusuario varchar_ignorecase(50) not null,
    constraint fk_roles_usuarios foreign key(nombreusuario) references usuarios(nombreusuario)
);
