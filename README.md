A simple Tampermonkey script that first unchecks all checkboxes on the screen then selects what the user specifies in the script. 

This repo is mostly for backup purposes and the code was almost entirely written by AI.

## Checkbox ID Guide (as of 8/13/24):

| Live TV                  | ID  |   | Video-on-Demand  | ID  |   | Movies-on-Demand                    | ID  |
|--------------------------|-----|---|------------------|-----|---|-------------------------------------|-----|
| USA Channels             | 1   |   | Latin Series     | 99  |   | English Movies                      | 60  |
| Canada Channels          | 10  |   | Hindi Series     | 101 |   | Arabic Movies                       | 88  |
| United Kingdom Channels  | 3   |   | EX-YU Series     | 144 |   | English Translated to Arabic Movies | 103 |
| Arab Channels            | 17  |   | Series Channels  | 63  |   | Romanian Movies                     | 112 |
| Latino Channels          | 35  |   | Arab Series      | 97  |   | Polish Movies                       | 64  |
| Spain Channels           | 5   |   | Turkish Series   | 107 |   | Spanish Movies                      | 65  |
| France Channels          | 27  |   | Kurdish Series   | 113 |   | Swedish Movies                      | 66  |
| Belgium Channels         | 21  |   | German Series    | 122 |   | Turkish Movies                      | 67  |
| Germany Channels         | 29  |   | Italian Series   | 123 |   | French Movies                       | 68  |
| Portugal Channels        | 40  |   | Pakistani Series | 124 |   | German Movies                       | 69  |
| Netherlands Channels     | 37  |   |                  |     |   | Albanian Movies                     | 70  |
| Austria Channels         | 12  |   |                  |     |   | EX-YU Movies                        | 71  |
| Italy Channels           | 9   |   |                  |     |   | Italian Movies                      | 72  |
| Israel Channels          | 50  |   |                  |     |   | Dutch Movies                        | 73  |
| Philippines Channels     | 55  |   |                  |     |   | Greek Movies                        | 75  |
| China Channels           | 91  |   |                  |     |   | Portuguese Movies                   | 78  |
| Thailand Channels        | 93  |   |                  |     |   | Indian Movies                       | 104 |
| Vietnam Channels         | 94  |   |                  |     |   | Filipino Movies                     | 108 |
| Indonesia Channels       | 130 |   |                  |     |   | Persian Movies                      | 109 |
| Turkey Channels          | 4   |   |                  |     |   | Brazilian Movies                    | 110 |
| Pakistan Channels        | 6   |   |                  |     |   | Bangladeshi Movies                  | 111 |
| Malta Channels           | 7   |   |                  |     |   | Danish Movies                       | 125 |
| Kurdistan Channels       | 8   |   |                  |     |   | Norwegian Movies                    | 126 |
| Australia Channels       | 11  |   |                  |     |   |                                     |     |
| Adult Channels           | 13  |   |                  |     |   |                                     |     |
| Afghanistan Channels     | 14  |   |                  |     |   |                                     |     |
| Africa Channels          | 15  |   |                  |     |   |                                     |     |
| Albania Channels         | 16  |   |                  |     |   |                                     |     |
| Armenia Channels         | 18  |   |                  |     |   |                                     |     |
| Azerbaijan Channels      | 19  |   |                  |     |   |                                     |     |
| Bangladesh Channels      | 20  |   |                  |     |   |                                     |     |
| Bulgaria Channels        | 22  |   |                  |     |   |                                     |     |
| Caribbean Channels       | 23  |   |                  |     |   |                                     |     |
| Czech Channels           | 25  |   |                  |     |   |                                     |     |
| EX-YU Channels           | 26  |   |                  |     |   |                                     |     |
| Greece Channels          | 30  |   |                  |     |   |                                     |     |
| Hungary Channels         | 31  |   |                  |     |   |                                     |     |
| India Channels           | 32  |   |                  |     |   |                                     |     |
| Iran Channels            | 33  |   |                  |     |   |                                     |     |
| Kazakhstan Channels      | 34  |   |                  |     |   |                                     |     |
| Poland Channels          | 39  |   |                  |     |   |                                     |     |
| Romania Channels         | 41  |   |                  |     |   |                                     |     |
| Russia Channels          | 42  |   |                  |     |   |                                     |     |
| Scandinavia Channels     | 43  |   |                  |     |   |                                     |     |
| Ukraine Channels         | 47  |   |                  |     |   |                                     |     |
| Bosnia Channels          | 79  |   |                  |     |   |                                     |     |
| Croatia Channels         | 80  |   |                  |     |   |                                     |     |
| Cyprus Channels          | 81  |   |                  |     |   |                                     |     |
| Dominican Channels       | 82  |   |                  |     |   |                                     |     |
| Lithuania Channels       | 84  |   |                  |     |   |                                     |     |
| Macedonia Channels       | 85  |   |                  |     |   |                                     |     |
| Malaysia Channels        | 102 |   |                  |     |   |                                     |     |
| Sri Lanka Channels       | 114 |   |                  |     |   |                                     |     |
| USA without PPV Channels | 117 |   |                  |     |   |                                     |     |
| Suriname Channels        | 118 |   |                  |     |   |                                     |     |
| Korean Channels          | 119 |   |                  |     |   |                                     |     |
| Slovak Channels          | 120 |   |                  |     |   |                                     |     |
| Cambodian Channels       | 121 |   |                  |     |   |                                     |     |
