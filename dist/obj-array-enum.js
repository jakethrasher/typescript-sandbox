"use strict";
var Role;
(function (Role) {
    Role[Role["PET"] = 0] = "PET";
    Role[Role["FRIEND"] = 1] = "FRIEND";
    Role[Role["GUARDIAN"] = 2] = "GUARDIAN";
})(Role || (Role = {}));
;
const dog = {
    name: 'Pearl',
    isGood: true,
    likes: ['sleeping', 'riding in the car', 'going on walks'],
    role: Role.PET
};
if (dog.role === Role.PET) {
    console.log('is pet');
}
