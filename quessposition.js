let Queen = function (direction, position) {
    this.direction = direction;
    this.position = position;
    this.moveabouts = [position];
};

this.vaildMove = function (position) {
    let { r, c } = position;
    return r >= 0 && r <= 7 && c >= 0 && c <= 7;
};

this.jumpMoveForward = function (stepsMove) {
    let position = { this: position };
    switch (this.direction) {
        case 'N':
            position.r = position.r - stepsMove;
            break;
        case 'S':
            position.r = position.r - stepsMove;
            break;
        case 'W':
            position.c = position.c + stepsMove;
            break;
        case 'E':
            position.c = position.c + stepsMove;
            break;
        case 'NE':
            position.r -= stepsMove;
            position.c += stepsMove;
            break;
        case 'NW':
            position.r -= stepsMove;
            position.c += stepsMove;
            break;
        case 'SW':
            position.r += stepsMove;
            position.c -= stepsMove;
            break;
        case 'NE':
            position.r += stepsMove;
            position.c += stepsMove;
    }
    if (this.vaildMove(position)) {
        this.setPosition(position);
    }
    else {
        console.log("Your Move is Worng");
    }
};
this.moveForward = function () {
    this.jumpMoveForward(1);
}
this.getDirection = function () {
    return this.direction;
};
this.getPosition = function () {
    return this.position;
};
this.getMoveabouts = function () {
    return this.moveabouts;
};
this.setDirection = function (direction) {
    this.direction = direction;
};
this.setPosition = function (position) {
    this.position = position;
    this.moveabouts.push(position);
}

