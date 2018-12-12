function includeFile (filename) {
    var fso = new ActiveXObject ("Scripting.FileSystemObject");
    var fileStream = fso.openTextFile (filename);
    var fileData = fileStream.readAll();
    fileStream.Close();
    eval(fileData);
}

