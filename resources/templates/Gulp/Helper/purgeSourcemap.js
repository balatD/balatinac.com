import through2 from 'through2';

/*
* @Desc     Removes all appearances of sourceMappingURL in files
* */
let purgeSourcemap = () => {
  let replace = content => {
    const replaceBlockComment = /\/\*# sourceMappingURL=.* \*\//gi;
    const replaceLineComment = /\/\/# sourceMappingURL=.*/gi;

    return content
      .replace(replaceBlockComment, '')
      .replace(replaceLineComment, '');
  }

  return through2.obj(function (file, encoding, callback) {
    if (file.isNull()) {
      callback(null, file);
      return;
    }

    if (file.isBuffer()) {
      file.contents = Buffer.from(replace(file.contents.toString()) || '');
    }

    this.push(file);
    callback();
  });
}

module.exports = purgeSourcemap;
