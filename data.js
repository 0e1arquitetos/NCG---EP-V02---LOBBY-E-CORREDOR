var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby-01",
      "name": "LOBBY 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0066616336717721936,
          "pitch": 0.0510278141507694,
          "rotation": 0,
          "target": "1-lobby-02"
        },
        {
          "yaw": -0.6849161705759599,
          "pitch": 0.06592097391759211,
          "rotation": 0,
          "target": "2-sponta"
        },
        {
          "yaw": 0.9046286462295239,
          "pitch": 0.10352667515554792,
          "rotation": 0,
          "target": "3-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby-02",
      "name": "LOBBY 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.6001795523765363,
        "pitch": 0.018572336935905653,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 3.022687537992798,
          "pitch": 0.03626448058689036,
          "rotation": 0,
          "target": "0-lobby-01"
        },
        {
          "yaw": -2.030718840360761,
          "pitch": 0.095331410965807,
          "rotation": 0,
          "target": "2-sponta"
        },
        {
          "yaw": 2.264808656792612,
          "pitch": 0.08080931345245901,
          "rotation": 0,
          "target": "3-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sponta",
      "name": "SPONTA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.028839516706908,
          "pitch": 0.05825771217148734,
          "rotation": 0,
          "target": "1-lobby-02"
        },
        {
          "yaw": 2.3544199877399308,
          "pitch": 0.054246488091768796,
          "rotation": 0,
          "target": "0-lobby-01"
        },
        {
          "yaw": 1.8797738799329604,
          "pitch": 0.03216103145559934,
          "rotation": 0,
          "target": "3-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-recepo",
      "name": "RECEPÇÃO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.358054038584811,
          "pitch": 0.08375140775632772,
          "rotation": 0,
          "target": "0-lobby-01"
        },
        {
          "yaw": -0.8264137564658771,
          "pitch": 0.10460229990987813,
          "rotation": 0,
          "target": "1-lobby-02"
        },
        {
          "yaw": -1.3987545302348643,
          "pitch": 0.05030576628453787,
          "rotation": 0,
          "target": "2-sponta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 3.137473029108188,
        "pitch": 0.028015810450810363,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.902108616179559,
          "pitch": 0.09224076358851896,
          "rotation": 0,
          "target": "3-recepo"
        },
        {
          "yaw": -1.3890329082618784,
          "pitch": 0.2014466422725416,
          "rotation": 0,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corredor",
      "name": "CORREDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.140858430820032,
          "pitch": 0.051494376871408676,
          "rotation": 0,
          "target": "4-estar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NCG - EP V02",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
