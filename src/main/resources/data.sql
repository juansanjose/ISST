insert into usuarios(nombreusuario, password, enabled) values ('gestor','{bcrypt}gestor1',true);
insert into roles(nombreusuario, rolusuario) values('gestor','ROLE_GESTOR');

insert into usuarios(nombreusuario, password, enabled) values ('cliente','{bcrypt}cliente1',true);
insert into roles(nombreusuario, rolusuario) values('cliente','ROLE_CLIENTE');

insert into usuarios(nombreusuario, password, enabled) values ('repar','{bcrypt}repar1',true);
insert into roles(nombreusuario, rolusuario) values('repar','ROLE_REPAR');