import { Movie } from "../types";

const data = [
  {
    id: "da622e99-dea1-4f98-a0db-c6bd2b6a5f0d",
    title: "in est risus auctor sed",
    year: 1992,
    image: "",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    stars: 3,
  },
  {
    id: "ca32f952-6414-41d1-8021-a2381ace7001",
    title: "mattis egestas metus",
    year: 1985,
    image: "",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    stars: 2,
  },
  {
    id: "b61e44be-b7e2-4957-80ec-fe8572f72699",
    title: "massa quis augue luctus tincidunt",
    year: 1997,
    image: "",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    stars: 5,
  },
  {
    id: "7181ad5a-65c2-4cd3-9348-a6cbf4dfb02c",
    title: "dolor quis odio consequat varius",
    year: 2002,
    image: "",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    stars: 4,
  },
  {
    id: "2812040b-6a76-471b-bb14-e027f62cfafe",
    title: "ullamcorper purus sit amet nulla",
    year: 2001,
    image: "",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    stars: 1,
  },
  {
    id: "94ae873d-5876-4d39-80d6-dd439f8722ea",
    title: "sed accumsan felis",
    year: 2007,
    image: "",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    stars: 2,
  },
  {
    id: "c550114d-3764-45c4-af78-e883d061b8c7",
    title: "ligula suspendisse ornare consequat lectus",
    year: 2000,
    image: "",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    stars: 1,
  },
  {
    id: "000bfbe0-02cf-4d4b-86d5-85bffc916ce0",
    title: "purus aliquet at feugiat non",
    year: 2012,
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    stars: 1,
  },
  {
    id: "c317d135-2d6b-43b2-b85e-0fdb5c22ab09",
    title: "posuere cubilia curae duis faucibus",
    year: 2010,
    image: "",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    stars: 2,
  },
  {
    id: "a80c72dc-52e9-4f07-b71a-0bd64ff140d0",
    title: "nulla suscipit ligula in lacus",
    year: 1994,
    image: "",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    stars: 5,
  },
  {
    id: "61bdf939-acb7-4691-bd1f-27c4b324f17f",
    title: "amet lobortis sapien sapien non",
    year: 1994,
    image: "",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    stars: 5,
  },
  {
    id: "bb0f933e-6ad4-4e2c-a5ad-7153d1e6f93c",
    title: "est congue elementum in hac",
    year: 1996,
    image: "",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    stars: 3,
  },
  {
    id: "7b287212-03c0-4072-ad8d-407ba7d8aa1d",
    title: "quisque erat eros viverra eget",
    year: 2005,
    image: "",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    stars: 4,
  },
  {
    id: "594fa5fe-3c02-4dc3-b764-142c5bbeb19d",
    title: "quisque ut erat",
    year: 2012,
    image: "",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    stars: 3,
  },
  {
    id: "99ed11c0-d6f1-4295-98e7-b1363fb67966",
    title: "ante vivamus tortor",
    year: 2010,
    image: "",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    stars: 5,
  },
  {
    id: "38d6b1d1-45a6-403a-bf75-54e00b4c6386",
    title: "orci nullam molestie nibh",
    year: 1993,
    image: "",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    stars: 2,
  },
  {
    id: "9952f21c-bf05-41bf-b6e1-36c143ca91ec",
    title: "mauris non ligula pellentesque ultrices",
    year: 1990,
    image: "",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    stars: 3,
  },
  {
    id: "e1f5496f-7720-4b83-a4ea-614c715ba475",
    title: "leo maecenas pulvinar",
    year: 1992,
    image: "",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    stars: 1,
  },
  {
    id: "2c50b695-b258-4c67-9c6d-13a89d57c59b",
    title: "convallis morbi odio odio",
    year: 1997,
    image: "",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    stars: 1,
  },
  {
    id: "b0ac2c51-44af-49a1-8ae3-a80667cd6cae",
    title: "pede morbi porttitor lorem id",
    year: 1993,
    image: "",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    stars: 3,
  },
  {
    id: "6644671d-c660-462b-860f-add9eb4e282e",
    title: "ante ipsum primis in faucibus",
    year: 2009,
    image: "",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    stars: 2,
  },
  {
    id: "9076aaa7-5734-4081-9dbc-ae8258504226",
    title: "sem sed sagittis",
    year: 1988,
    image: "",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    stars: 2,
  },
  {
    id: "68460ad1-f17a-46fa-bd2c-d98bf002ac8e",
    title: "lacinia eget tincidunt eget tempus",
    year: 2010,
    image: "",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    stars: 2,
  },
  {
    id: "af812df6-64a4-47f5-ae79-07fedf56abe0",
    title: "posuere nonummy integer non velit",
    year: 1996,
    image: "",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    stars: 2,
  },
  {
    id: "8df33f43-d117-4fe0-99c7-d37c4bae58fc",
    title: "ut tellus nulla ut erat",
    year: 1995,
    image: "",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    stars: 4,
  },
  {
    id: "b4ab3a9e-367b-420f-9396-4952b9e735cb",
    title: "maecenas tristique est",
    year: 1986,
    image: "",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    stars: 2,
  },
  {
    id: "d5c69fa6-6440-40b1-b3c5-a874a1bae4d9",
    title: "est donec odio justo sollicitudin",
    year: 1998,
    image: "",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    stars: 1,
  },
  {
    id: "6773d1d9-7c3f-4da9-885f-fd6e345522fa",
    title: "sem duis aliquam convallis",
    year: 2004,
    image: "",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    stars: 1,
  },
  {
    id: "7e66f00b-ee3b-491f-8cd1-5c0b69136005",
    title: "condimentum curabitur in libero",
    year: 2001,
    image: "",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    stars: 5,
  },
  {
    id: "51e4a0d3-3743-44f3-abcf-6cebd3cd1463",
    title: "felis sed lacus morbi sem",
    year: 2005,
    image: "",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    stars: 1,
  },
  {
    id: "8c71df3e-c301-41f9-a7fe-362c898c8c73",
    title: "quam fringilla rhoncus mauris enim",
    year: 1995,
    image: "",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    stars: 2,
  },
  {
    id: "0b61b82f-366b-495e-b6f3-0d04755ebb86",
    title: "amet nulla quisque arcu libero",
    year: 2011,
    image: "",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    stars: 3,
  },
  {
    id: "71a93ac6-08f6-44da-9b47-be25880aac7a",
    title: "justo eu massa donec dapibus",
    year: 1985,
    image: "",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    stars: 1,
  },
  {
    id: "873d7c84-6068-4e11-8fc4-166fda288e34",
    title: "in eleifend quam a odio",
    year: 1988,
    image: "",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    stars: 4,
  },
  {
    id: "c1c184d9-ec70-49f3-8019-8fa0d184438c",
    title: "praesent id massa id nisl",
    year: 2012,
    image: "",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    stars: 2,
  },
  {
    id: "9c33e032-a281-4d37-833e-b0b09ace5e85",
    title: "ultricies eu nibh quisque id",
    year: 1992,
    image: "",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    stars: 1,
  },
  {
    id: "3c7c0b9a-2c4b-43a1-914e-4adc76e92657",
    title: "congue elementum in hac habitasse",
    year: 2000,
    image: "",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    stars: 3,
  },
  {
    id: "faa0e7e4-ad91-4834-8af7-f1034de46cc0",
    title: "aliquam quis turpis eget",
    year: 1985,
    image: "",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    stars: 4,
  },
  {
    id: "aed5de65-33aa-4d20-9e43-8dcd659dd0d6",
    title: "pede ac diam cras pellentesque",
    year: 2012,
    image: "",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    stars: 3,
  },
  {
    id: "74c5a335-c872-447e-8035-88e8152b4ffa",
    title: "diam cras pellentesque volutpat dui",
    year: 2009,
    image: "",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    stars: 4,
  },
  {
    id: "68a65480-ee43-4a53-81e7-c0b7e64cffcb",
    title: "a suscipit nulla elit ac",
    year: 2002,
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    stars: 2,
  },
  {
    id: "b742d276-ef79-446a-9a89-94781e4da484",
    title: "facilisi cras non velit nec",
    year: 2009,
    image: "",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    stars: 5,
  },
  {
    id: "a4b97ec7-5219-436a-9edc-439096e40998",
    title: "quam pede lobortis ligula sit",
    year: 1995,
    image: "",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    stars: 5,
  },
  {
    id: "a0bed72c-c82b-425b-a8ea-61342dbfad60",
    title: "vestibulum sit amet cursus id",
    year: 1994,
    image: "",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    stars: 2,
  },
  {
    id: "062bc6bd-a84c-4ca7-ae2e-b4cf109a0734",
    title: "eget eleifend luctus ultricies eu",
    year: 1996,
    image: "",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    stars: 3,
  },
  {
    id: "1e5171d1-161a-47fc-b492-f59d2fcc78bc",
    title: "pellentesque quisque porta volutpat erat",
    year: 2013,
    image: "",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    stars: 5,
  },
  {
    id: "50c9bc53-404c-43fb-a83f-94f8d004abbd",
    title: "ornare imperdiet sapien",
    year: 2001,
    image: "",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    stars: 5,
  },
  {
    id: "e8853817-000c-4081-a05b-9564a6a4d1b6",
    title: "semper interdum mauris ullamcorper purus",
    year: 2001,
    image: "",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    stars: 3,
  },
  {
    id: "2f4db11f-ccc4-414a-85a5-5c494e93aed5",
    title: "leo odio porttitor id consequat",
    year: 1986,
    image: "",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    stars: 3,
  },
  {
    id: "269526f2-e979-451d-876d-165d7a5370f3",
    title: "tellus semper interdum mauris ullamcorper",
    year: 1997,
    image: "",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    stars: 3,
  },
  {
    id: "dba24e95-8d38-4b78-9bea-f7f2aee2c6ca",
    title: "ultrices posuere cubilia curae duis",
    year: 1993,
    image: "",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    stars: 3,
  },
  {
    id: "aae3b8a2-0083-4d46-8d95-d37cb8b1cc67",
    title: "integer non velit donec diam",
    year: 2009,
    image: "",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    stars: 5,
  },
  {
    id: "c8196b70-13ee-4bc5-9fab-06a52aa7b64c",
    title: "dis parturient montes nascetur ridiculus",
    year: 2006,
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    stars: 1,
  },
  {
    id: "5e84bac4-f12b-49f2-94db-289cbf41721b",
    title: "non pretium quis lectus suspendisse",
    year: 2007,
    image: "",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    stars: 3,
  },
  {
    id: "08a2ba03-c84d-4c4a-8aa1-351b0e3bacb9",
    title: "sodales scelerisque mauris sit amet",
    year: 1994,
    image: "",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    stars: 3,
  },
  {
    id: "8a0c6e8e-5f2a-48e6-bffa-0134ea87335f",
    title: "ipsum primis in",
    year: 1989,
    image: "",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    stars: 4,
  },
  {
    id: "5a3b95f8-65a1-4b80-a493-9d954a862466",
    title: "ligula vehicula consequat morbi a",
    year: 1994,
    image: "",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    stars: 2,
  },
  {
    id: "0601dd70-89a0-4c12-91f3-9c0c6baf46e1",
    title: "nulla nunc purus phasellus in",
    year: 1984,
    image: "",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    stars: 5,
  },
  {
    id: "dc678590-4411-43f7-8e55-c8d7e3084615",
    title: "dui luctus rutrum nulla",
    year: 1994,
    image: "",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    stars: 2,
  },
  {
    id: "a13e6bda-f2ca-4e41-b731-b053411bd6a1",
    title: "pede justo eu massa donec",
    year: 1988,
    image: "",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    stars: 1,
  },
  {
    id: "243cac2b-3465-44a5-846a-a9cb06662bc5",
    title: "lobortis ligula sit",
    year: 2007,
    image: "",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    stars: 1,
  },
  {
    id: "3fa59a90-cf84-4044-8fef-f6d378d8be2b",
    title: "non lectus aliquam sit amet",
    year: 2005,
    image: "",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    stars: 3,
  },
  {
    id: "4c750e20-153f-41a7-af65-1454be1dba90",
    title: "ut ultrices vel",
    year: 2013,
    image: "",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    stars: 3,
  },
  {
    id: "14bd252f-7e41-417f-ac2c-2b5132726fe5",
    title: "porttitor lacus at",
    year: 2008,
    image: "",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    stars: 1,
  },
  {
    id: "eddee333-f9c1-4177-aee9-e769453b6621",
    title: "vel accumsan tellus nisi",
    year: 1995,
    image: "",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    stars: 2,
  },
  {
    id: "b2d283e1-ed97-422c-ad2b-6f9fc5b84da9",
    title: "quis odio consequat varius integer",
    year: 2004,
    image: "",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    stars: 4,
  },
  {
    id: "b6d5cbfe-a45e-4f17-ac14-e2dad9afea36",
    title: "augue vestibulum rutrum rutrum neque",
    year: 1999,
    image: "",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    stars: 5,
  },
  {
    id: "721b6db1-df4d-4a55-8790-51cebfe112ea",
    title: "tortor duis mattis egestas metus",
    year: 2012,
    image: "",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    stars: 2,
  },
  {
    id: "937bf2df-f876-47cc-8364-b28b08f74574",
    title: "magna bibendum imperdiet nullam orci",
    year: 2007,
    image: "",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    stars: 3,
  },
  {
    id: "41aec4de-43c4-4db9-9592-4bf75c76f0bf",
    title: "curabitur at ipsum ac tellus",
    year: 2011,
    image: "",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    stars: 1,
  },
  {
    id: "7b8328f5-363c-4c76-860c-77161da46b25",
    title: "curabitur in libero ut massa",
    year: 2003,
    image: "",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    stars: 1,
  },
  {
    id: "bafde454-b2a3-4e1d-a1ed-9a575c74564d",
    title: "nullam molestie nibh in lectus",
    year: 1999,
    image: "",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    stars: 5,
  },
  {
    id: "8b1a8a6f-e4e8-46f8-87a8-1220269d07d4",
    title: "ultrices posuere cubilia curae nulla",
    year: 2009,
    image: "",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    stars: 5,
  },
  {
    id: "d16b7200-9a06-4dae-a126-c78395b981d1",
    title: "tempus semper est quam pharetra",
    year: 1996,
    image: "",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    stars: 3,
  },
  {
    id: "b6c0e661-03ad-4397-ae74-1b7f7bc18484",
    title: "integer non velit",
    year: 2009,
    image: "",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    stars: 3,
  },
  {
    id: "f1b21fef-9a7d-4ca9-b8ec-75e03fdcde67",
    title: "sit amet eros suspendisse accumsan",
    year: 2012,
    image: "",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    stars: 5,
  },
  {
    id: "702416ef-ded0-4474-bfd7-a12668e69b8e",
    title: "habitasse platea dictumst aliquam augue",
    year: 1994,
    image: "",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    stars: 2,
  },
  {
    id: "b7f49566-4c38-459c-98dd-571bbe005b3a",
    title: "rhoncus aliquet pulvinar sed nisl",
    year: 1992,
    image: "",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    stars: 3,
  },
  {
    id: "9055503b-1dac-43c8-9d37-a3c37c833b77",
    title: "convallis tortor risus dapibus augue",
    year: 2003,
    image: "",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    stars: 5,
  },
  {
    id: "d7a78742-d07c-47c9-9b39-ca143c8487d2",
    title: "consequat varius integer ac",
    year: 1993,
    image: "",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    stars: 2,
  },
  {
    id: "b17dc288-89b3-403b-b610-9304c8b01aa9",
    title: "vehicula condimentum curabitur",
    year: 2008,
    image: "",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    stars: 3,
  },
  {
    id: "6673debe-ff31-4204-ab41-8a0a4279bc85",
    title: "cras in purus eu magna",
    year: 2011,
    image: "",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    stars: 2,
  },
  {
    id: "22ea48bb-d612-4ad9-96d8-1b016bb79c41",
    title: "at ipsum ac tellus",
    year: 2007,
    image: "",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    stars: 2,
  },
  {
    id: "60c0fa0d-1e2d-4ca1-92d5-d5e07f5781c3",
    title: "justo eu massa donec",
    year: 2004,
    image: "",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    stars: 4,
  },
  {
    id: "697b98d3-0434-4dda-aedf-20c42f619f3c",
    title: "nulla mollis molestie lorem quisque",
    year: 1992,
    image: "",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    stars: 5,
  },
  {
    id: "30c396ea-51b1-4e27-a77c-5b4e8b49a436",
    title: "tincidunt nulla mollis molestie lorem",
    year: 2010,
    image: "",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    stars: 2,
  },
  {
    id: "b85fa4c2-3c8a-4412-9164-8f1cfc935b93",
    title: "fringilla rhoncus mauris enim leo",
    year: 2012,
    image: "",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    stars: 2,
  },
  {
    id: "7563d4b9-a4e6-473c-89c8-a15e8e4ebd28",
    title: "nec dui luctus rutrum nulla",
    year: 2008,
    image: "",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    stars: 2,
  },
  {
    id: "2f965e08-9f5a-40c1-96f0-b546246f51b2",
    title: "turpis a pede",
    year: 1962,
    image: "",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    stars: 5,
  },
  {
    id: "5b9107ad-da04-4833-b59d-f4692c9e1985",
    title: "facilisi cras non velit nec",
    year: 2001,
    image: "",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    stars: 4,
  },
  {
    id: "767c03aa-1c48-462d-be1e-8cca71e7a46d",
    title: "sit amet consectetuer adipiscing elit",
    year: 2012,
    image: "",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    stars: 3,
  },
  {
    id: "8dd2bf4f-68f6-4364-bc50-609fc780f8fb",
    title: "et ultrices posuere cubilia curae",
    year: 1999,
    image: "",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    stars: 5,
  },
  {
    id: "20ca441d-e2de-4df1-87b9-fa0b73402112",
    title: "dapibus augue vel accumsan",
    year: 2004,
    image: "",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    stars: 5,
  },
  {
    id: "876cd03b-4cc7-442b-87b5-1811ae57a58b",
    title: "sit amet lobortis sapien sapien",
    year: 1990,
    image: "",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    stars: 2,
  },
  {
    id: "74a1a36e-b190-4983-ae92-3fc6312ab8b8",
    title: "purus eu magna vulputate luctus",
    year: 2009,
    image: "",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    stars: 4,
  },
  {
    id: "1cebec65-0a00-4431-9c29-08d7f46e04d6",
    title: "pede venenatis non sodales sed",
    year: 2003,
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    stars: 2,
  },
  {
    id: "2579904f-88ef-4c0c-bc90-46893d23c53e",
    title: "ut erat id mauris vulputate",
    year: 1998,
    image: "",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    stars: 2,
  },
  {
    id: "1f09501d-a8ac-477d-b60c-54f943645a41",
    title: "tempor turpis nec euismod scelerisque",
    year: 2000,
    image: "",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    stars: 4,
  },
  {
    id: "4ad74156-1d57-4d41-aff4-bfcdbe39b4e6",
    title: "velit id pretium iaculis diam",
    year: 2002,
    image: "",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    stars: 3,
  },
  {
    id: "0e25e6cf-ba04-482b-9bfb-a74e69187078",
    title: "luctus et ultrices posuere cubilia",
    year: 2000,
    image: "",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    stars: 2,
  },
];

export default data.map((movie) => ({
  ...movie,
  image: require(`../assets/images/${Math.floor(Math.random() * 7 + 1)}.jpg`),
})) as Movie[];
