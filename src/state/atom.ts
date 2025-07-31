import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2025-08-01T09:00"),
      fim: new Date("2025-08-01T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2025-08-02T09:00"),
      fim: new Date("2025-08-02T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
