import express from "express";

const router = express.Router();

async function restart(req, res) {
  await res.send("Restarting...").then(() => {
    process.exit(0);
  });
}

/**
 * @swagger
 * /admin/restart:
 *    post:
 *      tags:
 *        - /admin
 *      summary: Restart the project
 *      responses:
 *        200:
 *          description: Successful Response (Restarting...)
 *        401:
 *          description: Unauthorized (No token provided)
 */
router.post("/", (req, res) => {
  restart(req, res);
});

export default router;
