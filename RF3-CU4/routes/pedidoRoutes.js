import { Router } from "express"

import {
  generarPedido,
  mostrarPedidos,
  mostrarPedido
} from "../controllers/pedidoCont.js"

const router = Router()

// GENERAR UN PEDIDO
router.post("/pedidos", generarPedido)

// CONSULTAR TODOS LOS PEDIDOS
router.get("/pedidos", mostrarPedidos)

// CONSULTAR UN PEDIDO POR ID
router.get("/pedidos/:id", mostrarPedido)

export default router