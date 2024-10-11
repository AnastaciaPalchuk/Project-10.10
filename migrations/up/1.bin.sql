start transaction;

create table bin
(
    id     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name    varchar not null
);

commit;