const editJsonFile = require("edit-json-file");
const file = editJsonFile(`package.json`);

const dependencies = file.get('dependencies')

dependencies['@keisha/design-system'] = 'file:keisha-design-system-0.0.0.tgz';
dependencies['@keisha/design-system-react'] = 'file:keisha-design-system-react-0.0.0.tgz';
dependencies['@keisha/design-system-icons-web'] = 'file:keisha-design-system-icons-web-0.0.0.tgz';
dependencies['@keisha/design-system-icons-react'] = 'file:keisha-design-system-icons-react-0.0.0.tgz';
dependencies['@keisha/design-system-tokens'] = 'file:keisha-design-system-tokens-0.0.0.tgz';

try {
    file.set('dependencies', dependencies);
    file.save();
    console.log('Updated package.json!');
} catch (err) {
    console.error(err);
}
