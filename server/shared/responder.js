class Responder {
    constructor(res) {
        this.res = res;
    }

    success({ message = "success", payload = {} } = {}) {
        this.res.status(200);
        this.res.json({ message, data: payload });
    }

    error({ message, payload } = {}) {
        this.res.status(400);
        this.res.json({ message, data: payload });
    }

    unauthorized({ message = 'unauthorized', payload } = {}) {
        this.res.status(401);
        this.res.json({ message, data: payload });
    }

    crash() {
        this.res.status(500);
        this.res.json({ message: 'internal server error' });
    }
}

module.exports = Responder;
