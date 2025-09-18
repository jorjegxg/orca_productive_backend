-- Tabelul principal: AppUser
CREATE TABLE AppUser (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL
);

-- Tabel: PrereleaseUsers
CREATE TABLE PrereleaseUsers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(70) NOT NULL UNIQUE,
    date TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_prereleaseusers_user FOREIGN KEY (user_id) REFERENCES AppUser (id)
);

-- Tabel: PrereleasePremium
CREATE TABLE PrereleasePremium (
    id SERIAL PRIMARY KEY,
    typeOfPremium VARCHAR(50) NOT NULL, -- enum se poate face ca CHECK constraint în PostgreSQL
    date TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_prereleasepremium_user FOREIGN KEY (user_id) REFERENCES AppUser (id)
);

-- Tabel: Skin
CREATE TABLE Skin (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Tabel de legătură: UserXSkin
CREATE TABLE UserXSkin (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    user_id INT NOT NULL,
    skin_id INT NOT NULL,
    CONSTRAINT fk_userxskin_user FOREIGN KEY (user_id) REFERENCES AppUser (id),
    CONSTRAINT fk_userxskin_skin FOREIGN KEY (skin_id) REFERENCES Skin(id)
);
