const express = require('express');
const router = express.Router();

const Todo = require('../../data/models/Todo');

router.all(function (req, res, next) {
    console.log("REQUEST: " + req);
    next();
});

// GET: /api/todo
router.get('/', function (req, res) {
    Todo.find(function (err, todos) {
        if(err) {
            return res.send(err);
        }

        res.json(todos);
    });
});

// GET: /api/todo/1
router.get('/:id', function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if(err) {
            return res.send(err);
        }

        res.json(todo);
    });
});

// POST: /api/todo
router.post('/', function (req, res) {
    Todo.create({
        text: req.body.text,
        description: req.body.description,
        done: !!req.body.done
    }, function (err, todo) {
        if(err) {
            return res.send(err);
        }

        Todo.find(function (err, todos) {
            if(err) {
                return res.send(err);
            }

            res.json(todos);
        });
    });
});

// PUT: /api/todo/1
router.put('/:id', function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, todo) {
        if(err) {
            return res.send(err);
        }

        Todo.find(function (err, todos) {
            if(err) {
                return res.send(err);
            }

            res.json(todos);
        });
    });
})

// DELETE: /api/todo/1
router.delete('/:id', function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err, todo) {
        if(err) {
            return res.send(err);
        }

        Todo.find(function (err, todos) {
            if(err) {
                return res.send(err);
            }

            res.json(todos);
        })
    });
});

module.exports = router;