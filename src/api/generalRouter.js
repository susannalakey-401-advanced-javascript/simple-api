function listAll(type) {
  return async (req, res, next) => {
    const listOfAll = await type.read();
    res.status(200).json({
      count: listOfAll.length,
      result: listOfAll,
    });
  };
}


function listOne(type) {
  return async (req, res, next) => {
    const readType = await type.read(req.params.id);
    if (readType.length === 0) {
      res.status(404);
    } else {
      res.status(200).json(readType[0]);
    }
  };

}

function updateItems(type) {
  return async (req, res, next) => {
    const updated = await type.update(req.params.id, req.body);
    res.status(200).json(updated);
  };

}

function createItems(type) {
  return async (req, res, next) => {
    const created = await type.create(req.body);
    res.status(201).json(created);
  }
}

function deleteItems(type) {
  return async (req, res, next) => {
    const deleted = await type.delete(req.params.id);
    res.status(204).json(deleted);
  }

}

module.exports = { listAll, listOne, updateItems, createItems, deleteItems };