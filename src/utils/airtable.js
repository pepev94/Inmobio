var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyD8xd84dyZZTNN2" }).base(
  "appOCWp1rKowto6AB"
);

const sendToAirtable = ({
  name = "",
  email = "",
  phone = "",
  message = "",
}) => {
  base("Table 1").create(
    [
      {
        fields: { name, email, phone, message },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
};

export default sendToAirtable;
