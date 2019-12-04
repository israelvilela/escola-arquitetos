class DummyController {

    async store(req, res) {}

    async update(req, res) {}

    async delete(req, res) {}

    async index(req, res) {
        return res.json({"ok": true})
    }
}

export default new DummyController();