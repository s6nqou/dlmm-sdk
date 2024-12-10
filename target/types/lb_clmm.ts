/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/lb_clmm.json`.
 */
export type LbClmm = {
  "address": "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo",
  "metadata": {
    "name": "lbClmm",
    "version": "0.8.2",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addLiquidity",
      "discriminator": [
        181,
        157,
        89,
        67,
        143,
        182,
        52,
        72
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userTokenX",
          "writable": true
        },
        {
          "name": "userTokenY",
          "writable": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": {
              "name": "liquidityParameter"
            }
          }
        }
      ]
    },
    {
      "name": "addLiquidityByStrategy",
      "discriminator": [
        7,
        3,
        150,
        127,
        148,
        40,
        61,
        200
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userTokenX",
          "writable": true
        },
        {
          "name": "userTokenY",
          "writable": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": {
              "name": "liquidityParameterByStrategy"
            }
          }
        }
      ]
    },
    {
      "name": "addLiquidityByStrategyOneSide",
      "discriminator": [
        41,
        5,
        238,
        175,
        100,
        225,
        6,
        205
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userToken",
          "writable": true
        },
        {
          "name": "reserve",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": {
              "name": "liquidityParameterByStrategyOneSide"
            }
          }
        }
      ]
    },
    {
      "name": "addLiquidityByWeight",
      "discriminator": [
        28,
        140,
        238,
        99,
        231,
        162,
        21,
        149
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userTokenX",
          "writable": true
        },
        {
          "name": "userTokenY",
          "writable": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": {
              "name": "liquidityParameterByWeight"
            }
          }
        }
      ]
    },
    {
      "name": "addLiquidityOneSide",
      "discriminator": [
        94,
        155,
        103,
        151,
        70,
        95,
        220,
        165
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userToken",
          "writable": true
        },
        {
          "name": "reserve",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": {
              "name": "liquidityOneSideParameter"
            }
          }
        }
      ]
    },
    {
      "name": "addLiquidityOneSidePrecise",
      "discriminator": [
        161,
        194,
        103,
        84,
        171,
        71,
        250,
        154
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userToken",
          "writable": true
        },
        {
          "name": "reserve",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "parameter",
          "type": {
            "defined": {
              "name": "addLiquiditySingleSidePreciseParameter"
            }
          }
        }
      ]
    },
    {
      "name": "claimFee",
      "discriminator": [
        169,
        32,
        79,
        137,
        136,
        232,
        70,
        137
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "userTokenX",
          "writable": true
        },
        {
          "name": "userTokenY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimReward",
      "discriminator": [
        149,
        95,
        181,
        242,
        94,
        90,
        158,
        162
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "rewardVault",
          "writable": true
        },
        {
          "name": "rewardMint"
        },
        {
          "name": "userTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closePosition",
      "discriminator": [
        123,
        134,
        81,
        0,
        49,
        68,
        98,
        98
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "rentReceiver",
          "writable": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "closePresetParameter",
      "discriminator": [
        4,
        148,
        145,
        100,
        134,
        26,
        181,
        61
      ],
      "accounts": [
        {
          "name": "presetParameter",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "rentReceiver",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "fundReward",
      "discriminator": [
        188,
        50,
        249,
        165,
        93,
        151,
        38,
        63
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "rewardVault",
          "writable": true
        },
        {
          "name": "rewardMint"
        },
        {
          "name": "funderTokenAccount",
          "writable": true
        },
        {
          "name": "funder",
          "signer": true
        },
        {
          "name": "binArray",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "carryForward",
          "type": "bool"
        }
      ]
    },
    {
      "name": "increaseOracleLength",
      "discriminator": [
        190,
        61,
        125,
        87,
        103,
        79,
        158,
        173
      ],
      "accounts": [
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "lengthToAdd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeBinArray",
      "discriminator": [
        35,
        86,
        19,
        185,
        78,
        212,
        75,
        211
      ],
      "accounts": [
        {
          "name": "lbPair"
        },
        {
          "name": "binArray",
          "writable": true
        },
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "i64"
        }
      ]
    },
    {
      "name": "initializeBinArrayBitmapExtension",
      "discriminator": [
        47,
        157,
        226,
        180,
        12,
        240,
        33,
        71
      ],
      "accounts": [
        {
          "name": "lbPair"
        },
        {
          "name": "binArrayBitmapExtension",
          "docs": [
            "Initialize an account to store if a bin array is initialized."
          ],
          "writable": true
        },
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": []
    },
    {
      "name": "initializeCustomizablePermissionlessLbPair",
      "discriminator": [
        46,
        39,
        41,
        135,
        111,
        183,
        200,
        64
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "tokenMintX"
        },
        {
          "name": "tokenMintY"
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "userTokenX"
        },
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "customizableParams"
            }
          }
        }
      ]
    },
    {
      "name": "initializeLbPair",
      "discriminator": [
        45,
        154,
        237,
        210,
        221,
        15,
        166,
        92
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "tokenMintX"
        },
        {
          "name": "tokenMintY"
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "presetParameter"
        },
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "activeId",
          "type": "i32"
        },
        {
          "name": "binStep",
          "type": "u16"
        }
      ]
    },
    {
      "name": "initializePermissionLbPair",
      "discriminator": [
        108,
        102,
        213,
        85,
        251,
        3,
        53,
        21
      ],
      "accounts": [
        {
          "name": "base",
          "signer": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "tokenMintX"
        },
        {
          "name": "tokenMintY"
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "ixData",
          "type": {
            "defined": {
              "name": "initPermissionPairIx"
            }
          }
        }
      ]
    },
    {
      "name": "initializePosition",
      "discriminator": [
        219,
        192,
        234,
        71,
        190,
        191,
        102,
        80
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "position",
          "writable": true,
          "signer": true
        },
        {
          "name": "lbPair"
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "lowerBinId",
          "type": "i32"
        },
        {
          "name": "width",
          "type": "i32"
        }
      ]
    },
    {
      "name": "initializePositionByOperator",
      "discriminator": [
        251,
        189,
        190,
        244,
        117,
        254,
        35,
        148
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "base",
          "signer": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair"
        },
        {
          "name": "owner"
        },
        {
          "name": "operator",
          "docs": [
            "operator"
          ],
          "signer": true
        },
        {
          "name": "operatorTokenX"
        },
        {
          "name": "ownerTokenX"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "lowerBinId",
          "type": "i32"
        },
        {
          "name": "width",
          "type": "i32"
        },
        {
          "name": "feeOwner",
          "type": "pubkey"
        },
        {
          "name": "lockReleasePoint",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePositionPda",
      "discriminator": [
        46,
        82,
        125,
        146,
        85,
        141,
        228,
        153
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "base",
          "signer": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair"
        },
        {
          "name": "owner",
          "docs": [
            "owner"
          ],
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "lowerBinId",
          "type": "i32"
        },
        {
          "name": "width",
          "type": "i32"
        }
      ]
    },
    {
      "name": "initializePresetParameter",
      "discriminator": [
        66,
        188,
        71,
        211,
        98,
        109,
        14,
        186
      ],
      "accounts": [
        {
          "name": "presetParameter",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "ix",
          "type": {
            "defined": {
              "name": "initPresetParametersIx"
            }
          }
        }
      ]
    },
    {
      "name": "initializeReward",
      "discriminator": [
        95,
        135,
        192,
        196,
        242,
        129,
        230,
        68
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "rewardVault",
          "writable": true
        },
        {
          "name": "rewardMint"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "rewardDuration",
          "type": "u64"
        },
        {
          "name": "funder",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "migrateBinArray",
      "discriminator": [
        17,
        23,
        159,
        211,
        101,
        184,
        41,
        241
      ],
      "accounts": [
        {
          "name": "lbPair"
        }
      ],
      "args": []
    },
    {
      "name": "migratePosition",
      "discriminator": [
        15,
        132,
        59,
        50,
        199,
        6,
        251,
        46
      ],
      "accounts": [
        {
          "name": "positionV2",
          "writable": true,
          "signer": true
        },
        {
          "name": "positionV1",
          "writable": true
        },
        {
          "name": "lbPair"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rentReceiver",
          "writable": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "removeAllLiquidity",
      "discriminator": [
        10,
        51,
        61,
        35,
        112,
        105,
        24,
        85
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userTokenX",
          "writable": true
        },
        {
          "name": "userTokenY",
          "writable": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "removeLiquidity",
      "discriminator": [
        80,
        85,
        209,
        72,
        24,
        206,
        177,
        108
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "writable": true,
          "optional": true
        },
        {
          "name": "userTokenX",
          "writable": true
        },
        {
          "name": "userTokenY",
          "writable": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "sender",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "binLiquidityRemoval",
          "type": {
            "vec": {
              "defined": {
                "name": "binLiquidityReduction"
              }
            }
          }
        }
      ]
    },
    {
      "name": "setActivationPoint",
      "discriminator": [
        91,
        249,
        15,
        165,
        26,
        129,
        254,
        125
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "activationPoint",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setPreActivationDuration",
      "discriminator": [
        165,
        61,
        201,
        244,
        130,
        159,
        22,
        100
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "creator",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "preActivationDuration",
          "type": "u16"
        }
      ]
    },
    {
      "name": "setPreActivationSwapAddress",
      "discriminator": [
        57,
        139,
        47,
        123,
        216,
        80,
        223,
        10
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "creator",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "preActivationSwapAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "swap",
      "discriminator": [
        248,
        198,
        158,
        145,
        225,
        117,
        135,
        200
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "optional": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "userTokenIn",
          "writable": true
        },
        {
          "name": "userTokenOut",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "hostFeeIn",
          "writable": true,
          "optional": true
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapExactOut",
      "discriminator": [
        250,
        73,
        101,
        33,
        38,
        207,
        75,
        184
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "optional": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "userTokenIn",
          "writable": true
        },
        {
          "name": "userTokenOut",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "hostFeeIn",
          "writable": true,
          "optional": true
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "maxInAmount",
          "type": "u64"
        },
        {
          "name": "outAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapWithPriceImpact",
      "discriminator": [
        56,
        173,
        230,
        208,
        173,
        228,
        156,
        205
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayBitmapExtension",
          "optional": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "userTokenIn",
          "writable": true
        },
        {
          "name": "userTokenOut",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "oracle",
          "writable": true
        },
        {
          "name": "hostFeeIn",
          "writable": true,
          "optional": true
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "activeId",
          "type": {
            "option": "i32"
          }
        },
        {
          "name": "maxPriceImpactBps",
          "type": "u16"
        }
      ]
    },
    {
      "name": "togglePairStatus",
      "discriminator": [
        61,
        115,
        52,
        23,
        46,
        13,
        31,
        144
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "updateFeeParameters",
      "discriminator": [
        128,
        128,
        208,
        91,
        246,
        53,
        31,
        176
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "feeParameter",
          "type": {
            "defined": {
              "name": "feeParameter"
            }
          }
        }
      ]
    },
    {
      "name": "updateFeesAndRewards",
      "discriminator": [
        154,
        230,
        250,
        13,
        236,
        209,
        75,
        223
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "binArrayLower",
          "writable": true
        },
        {
          "name": "binArrayUpper",
          "writable": true
        },
        {
          "name": "owner",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "updatePositionOperator",
      "discriminator": [
        202,
        184,
        103,
        143,
        180,
        191,
        116,
        217
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "operator",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateRewardDuration",
      "discriminator": [
        138,
        174,
        196,
        169,
        213,
        235,
        254,
        107
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "binArray",
          "writable": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "newDuration",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRewardFunder",
      "discriminator": [
        211,
        28,
        48,
        32,
        215,
        160,
        35,
        23
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "newFunder",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "withdrawIneligibleReward",
      "discriminator": [
        148,
        206,
        42,
        195,
        247,
        49,
        103,
        8
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "rewardVault",
          "writable": true
        },
        {
          "name": "rewardMint"
        },
        {
          "name": "funderTokenAccount",
          "writable": true
        },
        {
          "name": "funder",
          "signer": true
        },
        {
          "name": "binArray",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawProtocolFee",
      "discriminator": [
        158,
        201,
        158,
        189,
        33,
        93,
        162,
        103
      ],
      "accounts": [
        {
          "name": "lbPair",
          "writable": true
        },
        {
          "name": "reserveX",
          "writable": true
        },
        {
          "name": "reserveY",
          "writable": true
        },
        {
          "name": "tokenXMint"
        },
        {
          "name": "tokenYMint"
        },
        {
          "name": "receiverTokenX",
          "writable": true
        },
        {
          "name": "receiverTokenY",
          "writable": true
        },
        {
          "name": "feeOwner",
          "signer": true
        },
        {
          "name": "tokenXProgram"
        },
        {
          "name": "tokenYProgram"
        }
      ],
      "args": [
        {
          "name": "amountX",
          "type": "u64"
        },
        {
          "name": "amountY",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "binArray",
      "discriminator": [
        92,
        142,
        92,
        220,
        5,
        148,
        70,
        181
      ]
    },
    {
      "name": "binArrayBitmapExtension",
      "discriminator": [
        80,
        111,
        124,
        113,
        55,
        237,
        18,
        5
      ]
    },
    {
      "name": "lbPair",
      "discriminator": [
        33,
        11,
        49,
        98,
        181,
        101,
        177,
        13
      ]
    },
    {
      "name": "oracle",
      "discriminator": [
        139,
        194,
        131,
        179,
        140,
        179,
        229,
        244
      ]
    },
    {
      "name": "position",
      "discriminator": [
        170,
        188,
        143,
        228,
        122,
        64,
        247,
        208
      ]
    },
    {
      "name": "positionV2",
      "discriminator": [
        117,
        176,
        212,
        199,
        245,
        180,
        133,
        182
      ]
    },
    {
      "name": "presetParameter",
      "discriminator": [
        242,
        62,
        244,
        34,
        181,
        112,
        58,
        170
      ]
    }
  ],
  "events": [
    {
      "name": "addLiquidity",
      "discriminator": [
        31,
        94,
        125,
        90,
        227,
        52,
        61,
        186
      ]
    },
    {
      "name": "claimFee",
      "discriminator": [
        75,
        122,
        154,
        48,
        140,
        74,
        123,
        163
      ]
    },
    {
      "name": "claimReward",
      "discriminator": [
        148,
        116,
        134,
        204,
        22,
        171,
        85,
        95
      ]
    },
    {
      "name": "compositionFee",
      "discriminator": [
        128,
        151,
        123,
        106,
        17,
        102,
        113,
        142
      ]
    },
    {
      "name": "feeParameterUpdate",
      "discriminator": [
        48,
        76,
        241,
        117,
        144,
        215,
        242,
        44
      ]
    },
    {
      "name": "fundReward",
      "discriminator": [
        246,
        228,
        58,
        130,
        145,
        170,
        79,
        204
      ]
    },
    {
      "name": "increaseObservation",
      "discriminator": [
        99,
        249,
        17,
        121,
        166,
        156,
        207,
        215
      ]
    },
    {
      "name": "initializeReward",
      "discriminator": [
        211,
        153,
        88,
        62,
        149,
        60,
        177,
        70
      ]
    },
    {
      "name": "lbPairCreate",
      "discriminator": [
        185,
        74,
        252,
        125,
        27,
        215,
        188,
        111
      ]
    },
    {
      "name": "positionClose",
      "discriminator": [
        255,
        196,
        16,
        107,
        28,
        202,
        53,
        128
      ]
    },
    {
      "name": "positionCreate",
      "discriminator": [
        144,
        142,
        252,
        84,
        157,
        53,
        37,
        121
      ]
    },
    {
      "name": "removeLiquidity",
      "discriminator": [
        116,
        244,
        97,
        232,
        103,
        31,
        152,
        58
      ]
    },
    {
      "name": "swap",
      "discriminator": [
        81,
        108,
        227,
        190,
        205,
        208,
        10,
        196
      ]
    },
    {
      "name": "updatePositionLockReleasePoint",
      "discriminator": [
        133,
        214,
        66,
        224,
        64,
        12,
        7,
        191
      ]
    },
    {
      "name": "updatePositionOperator",
      "discriminator": [
        39,
        115,
        48,
        204,
        246,
        47,
        66,
        57
      ]
    },
    {
      "name": "updateRewardDuration",
      "discriminator": [
        223,
        245,
        224,
        153,
        49,
        29,
        163,
        172
      ]
    },
    {
      "name": "updateRewardFunder",
      "discriminator": [
        224,
        178,
        174,
        74,
        252,
        165,
        85,
        180
      ]
    },
    {
      "name": "withdrawIneligibleReward",
      "discriminator": [
        231,
        189,
        65,
        149,
        102,
        215,
        154,
        244
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidStartBinIndex",
      "msg": "Invalid start bin index"
    },
    {
      "code": 6001,
      "name": "invalidBinId",
      "msg": "Invalid bin id"
    },
    {
      "code": 6002,
      "name": "invalidInput",
      "msg": "Invalid input data"
    },
    {
      "code": 6003,
      "name": "exceededAmountSlippageTolerance",
      "msg": "Exceeded amount slippage tolerance"
    },
    {
      "code": 6004,
      "name": "exceededBinSlippageTolerance",
      "msg": "Exceeded bin slippage tolerance"
    },
    {
      "code": 6005,
      "name": "compositionFactorFlawed",
      "msg": "Composition factor flawed"
    },
    {
      "code": 6006,
      "name": "nonPresetBinStep",
      "msg": "Non preset bin step"
    },
    {
      "code": 6007,
      "name": "zeroLiquidity",
      "msg": "Zero liquidity"
    },
    {
      "code": 6008,
      "name": "invalidPosition",
      "msg": "Invalid position"
    },
    {
      "code": 6009,
      "name": "binArrayNotFound",
      "msg": "Bin array not found"
    },
    {
      "code": 6010,
      "name": "invalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6011,
      "name": "invalidAccountForSingleDeposit",
      "msg": "Invalid account for single deposit"
    },
    {
      "code": 6012,
      "name": "pairInsufficientLiquidity",
      "msg": "Pair insufficient liquidity"
    },
    {
      "code": 6013,
      "name": "invalidFeeOwner",
      "msg": "Invalid fee owner"
    },
    {
      "code": 6014,
      "name": "invalidFeeWithdrawAmount",
      "msg": "Invalid fee withdraw amount"
    },
    {
      "code": 6015,
      "name": "invalidAdmin",
      "msg": "Invalid admin"
    },
    {
      "code": 6016,
      "name": "identicalFeeOwner",
      "msg": "Identical fee owner"
    },
    {
      "code": 6017,
      "name": "invalidBps",
      "msg": "Invalid basis point"
    },
    {
      "code": 6018,
      "name": "mathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6019,
      "name": "typeCastFailed",
      "msg": "Type cast error"
    },
    {
      "code": 6020,
      "name": "invalidRewardIndex",
      "msg": "Invalid reward index"
    },
    {
      "code": 6021,
      "name": "invalidRewardDuration",
      "msg": "Invalid reward duration"
    },
    {
      "code": 6022,
      "name": "rewardInitialized",
      "msg": "Reward already initialized"
    },
    {
      "code": 6023,
      "name": "rewardUninitialized",
      "msg": "Reward not initialized"
    },
    {
      "code": 6024,
      "name": "identicalFunder",
      "msg": "Identical funder"
    },
    {
      "code": 6025,
      "name": "rewardCampaignInProgress",
      "msg": "Reward campaign in progress"
    },
    {
      "code": 6026,
      "name": "identicalRewardDuration",
      "msg": "Reward duration is the same"
    },
    {
      "code": 6027,
      "name": "invalidBinArray",
      "msg": "Invalid bin array"
    },
    {
      "code": 6028,
      "name": "nonContinuousBinArrays",
      "msg": "Bin arrays must be continuous"
    },
    {
      "code": 6029,
      "name": "invalidRewardVault",
      "msg": "Invalid reward vault"
    },
    {
      "code": 6030,
      "name": "nonEmptyPosition",
      "msg": "Position is not empty"
    },
    {
      "code": 6031,
      "name": "unauthorizedAccess",
      "msg": "Unauthorized access"
    },
    {
      "code": 6032,
      "name": "invalidFeeParameter",
      "msg": "Invalid fee parameter"
    },
    {
      "code": 6033,
      "name": "missingOracle",
      "msg": "Missing oracle account"
    },
    {
      "code": 6034,
      "name": "insufficientSample",
      "msg": "Insufficient observation sample"
    },
    {
      "code": 6035,
      "name": "invalidLookupTimestamp",
      "msg": "Invalid lookup timestamp"
    },
    {
      "code": 6036,
      "name": "bitmapExtensionAccountIsNotProvided",
      "msg": "Bitmap extension account is not provided"
    },
    {
      "code": 6037,
      "name": "cannotFindNonZeroLiquidityBinArrayId",
      "msg": "Cannot find non-zero liquidity binArrayId"
    },
    {
      "code": 6038,
      "name": "binIdOutOfBound",
      "msg": "Bin id out of bound"
    },
    {
      "code": 6039,
      "name": "insufficientOutAmount",
      "msg": "Insufficient amount in for minimum out"
    },
    {
      "code": 6040,
      "name": "invalidPositionWidth",
      "msg": "Invalid position width"
    },
    {
      "code": 6041,
      "name": "excessiveFeeUpdate",
      "msg": "Excessive fee update"
    },
    {
      "code": 6042,
      "name": "poolDisabled",
      "msg": "Pool disabled"
    },
    {
      "code": 6043,
      "name": "invalidPoolType",
      "msg": "Invalid pool type"
    },
    {
      "code": 6044,
      "name": "exceedMaxWhitelist",
      "msg": "Whitelist for wallet is full"
    },
    {
      "code": 6045,
      "name": "invalidIndex",
      "msg": "Invalid index"
    },
    {
      "code": 6046,
      "name": "rewardNotEnded",
      "msg": "Reward not ended"
    },
    {
      "code": 6047,
      "name": "mustWithdrawnIneligibleReward",
      "msg": "Must withdraw ineligible reward"
    },
    {
      "code": 6048,
      "name": "unauthorizedAddress",
      "msg": "Unauthorized address"
    },
    {
      "code": 6049,
      "name": "operatorsAreTheSame",
      "msg": "Cannot update because operators are the same"
    },
    {
      "code": 6050,
      "name": "withdrawToWrongTokenAccount",
      "msg": "Withdraw to wrong token account"
    },
    {
      "code": 6051,
      "name": "wrongRentReceiver",
      "msg": "Wrong rent receiver"
    },
    {
      "code": 6052,
      "name": "alreadyPassActivationPoint",
      "msg": "Already activated"
    },
    {
      "code": 6053,
      "name": "exceedMaxSwappedAmount",
      "msg": "Swapped amount is exceeded max swapped amount"
    },
    {
      "code": 6054,
      "name": "invalidStrategyParameters",
      "msg": "Invalid strategy parameters"
    },
    {
      "code": 6055,
      "name": "liquidityLocked",
      "msg": "Liquidity locked"
    },
    {
      "code": 6056,
      "name": "binRangeIsNotEmpty",
      "msg": "Bin range is not empty"
    },
    {
      "code": 6057,
      "name": "notExactAmountOut",
      "msg": "Amount out is not matched with exact amount out"
    },
    {
      "code": 6058,
      "name": "invalidActivationType",
      "msg": "Invalid activation type"
    },
    {
      "code": 6059,
      "name": "invalidActivationDuration",
      "msg": "Invalid activation duration"
    },
    {
      "code": 6060,
      "name": "missingTokenAmountAsTokenLaunchProof",
      "msg": "Missing token amount as token launch owner proof"
    },
    {
      "code": 6061,
      "name": "invalidQuoteToken",
      "msg": "Quote token must be SOL or USDC"
    },
    {
      "code": 6062,
      "name": "invalidBinStep",
      "msg": "Invalid bin step"
    },
    {
      "code": 6063,
      "name": "invalidBaseFee",
      "msg": "Invalid base fee"
    },
    {
      "code": 6064,
      "name": "invalidPreActivationDuration",
      "msg": "Invalid pre-activation duration"
    },
    {
      "code": 6065,
      "name": "alreadyPassPreActivationSwapPoint",
      "msg": "Already pass pre-activation swap point"
    }
  ],
  "types": [
    {
      "name": "addLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "from",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "amounts",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "activeBinId",
            "type": "i32"
          }
        ]
      }
    },
    {
      "name": "addLiquiditySingleSidePreciseParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bins",
            "type": {
              "vec": {
                "defined": {
                  "name": "compressedBinDepositAmount"
                }
              }
            }
          },
          {
            "name": "decompressMultiplier",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bin",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of token X in the bin. This already excluded protocol fees."
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of token Y in the bin. This already excluded protocol fees."
            ],
            "type": "u64"
          },
          {
            "name": "price",
            "docs": [
              "Bin price"
            ],
            "type": "u128"
          },
          {
            "name": "liquiditySupply",
            "docs": [
              "Liquidities of the bin. This is the same as LP mint supply. q-number"
            ],
            "type": "u128"
          },
          {
            "name": "rewardPerTokenStored",
            "docs": [
              "reward_a_per_token_stored"
            ],
            "type": {
              "array": [
                "u128",
                2
              ]
            }
          },
          {
            "name": "feeAmountXPerTokenStored",
            "docs": [
              "Swap fee amount of token X per liquidity deposited."
            ],
            "type": "u128"
          },
          {
            "name": "feeAmountYPerTokenStored",
            "docs": [
              "Swap fee amount of token Y per liquidity deposited."
            ],
            "type": "u128"
          },
          {
            "name": "amountXIn",
            "docs": [
              "Total token X swap into the bin. Only used for tracking purpose."
            ],
            "type": "u128"
          },
          {
            "name": "amountYIn",
            "docs": [
              "Total token Y swap into he bin. Only used for tracking purpose."
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "binArray",
      "docs": [
        "An account to contain a range of bin. For example: Bin 100 <-> 200.",
        "For example:",
        "BinArray index: 0 contains bin 0 <-> 599",
        "index: 2 contains bin 600 <-> 1199, ..."
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "i64"
          },
          {
            "name": "version",
            "docs": [
              "Version of binArray"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "bins",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "bin"
                  }
                },
                70
              ]
            }
          }
        ]
      }
    },
    {
      "name": "binArrayBitmapExtension",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "positiveBinArrayBitmap",
            "docs": [
              "Packed initialized bin array state for start_bin_index is positive"
            ],
            "type": {
              "array": [
                {
                  "array": [
                    "u64",
                    8
                  ]
                },
                12
              ]
            }
          },
          {
            "name": "negativeBinArrayBitmap",
            "docs": [
              "Packed initialized bin array state for start_bin_index is negative"
            ],
            "type": {
              "array": [
                {
                  "array": [
                    "u64",
                    8
                  ]
                },
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "binLiquidityDistribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "docs": [
              "Define the bin ID wish to deposit to."
            ],
            "type": "i32"
          },
          {
            "name": "distributionX",
            "docs": [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
            ],
            "type": "u16"
          },
          {
            "name": "distributionY",
            "docs": [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "binLiquidityDistributionByWeight",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "docs": [
              "Define the bin ID wish to deposit to."
            ],
            "type": "i32"
          },
          {
            "name": "weight",
            "docs": [
              "weight of liquidity distributed for this bin id"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "binLiquidityReduction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "type": "i32"
          },
          {
            "name": "bpsToRemove",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "claimFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "feeX",
            "type": "u64"
          },
          {
            "name": "feeY",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "claimReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "rewardIndex",
            "type": "u64"
          },
          {
            "name": "totalReward",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "compositionFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": "pubkey"
          },
          {
            "name": "binId",
            "type": "i16"
          },
          {
            "name": "tokenXFeeAmount",
            "type": "u64"
          },
          {
            "name": "tokenYFeeAmount",
            "type": "u64"
          },
          {
            "name": "protocolTokenXFeeAmount",
            "type": "u64"
          },
          {
            "name": "protocolTokenYFeeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "compressedBinDepositAmount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "type": "i32"
          },
          {
            "name": "amount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "customizableParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "activeId",
            "docs": [
              "Pool price"
            ],
            "type": "i32"
          },
          {
            "name": "binStep",
            "docs": [
              "Bin step"
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Base factor"
            ],
            "type": "u16"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type. 0 = Slot, 1 = Time. Check ActivationType enum"
            ],
            "type": "u8"
          },
          {
            "name": "hasAlphaVault",
            "docs": [
              "Whether the pool has an alpha vault"
            ],
            "type": "bool"
          },
          {
            "name": "activationPoint",
            "docs": [
              "Decide when does the pool start trade. None = Now"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "padding",
            "docs": [
              "Padding, for future use"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "feeInfo",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeXPerTokenComplete",
            "type": "u128"
          },
          {
            "name": "feeYPerTokenComplete",
            "type": "u128"
          },
          {
            "name": "feeXPending",
            "type": "u64"
          },
          {
            "name": "feeYPending",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "feeParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Base factor for base fee rate"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "feeParameterUpdate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "protocolShare",
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "fundReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "funder",
            "type": "pubkey"
          },
          {
            "name": "rewardIndex",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "increaseObservation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "newObservationLength",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "initPermissionPairIx",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "activeId",
            "type": "i32"
          },
          {
            "name": "binStep",
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "type": "u16"
          },
          {
            "name": "minBinId",
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "type": "i32"
          },
          {
            "name": "lockDuration",
            "type": "u64"
          },
          {
            "name": "activationType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "initPresetParametersIx",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binStep",
            "docs": [
              "Bin step. Represent the price increment / decrement."
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ],
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "docs": [
              "Filter period determine high frequency trading time window."
            ],
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "docs": [
              "Decay period determine when the volatile fee start decay / decrease."
            ],
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "docs": [
              "Reduction factor controls the volatile fee rate decrement rate."
            ],
            "type": "u16"
          },
          {
            "name": "variableFeeControl",
            "docs": [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ],
            "type": "u32"
          },
          {
            "name": "maxVolatilityAccumulator",
            "docs": [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ],
            "type": "u32"
          },
          {
            "name": "minBinId",
            "docs": [
              "Min bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "Max bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "initializeReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "rewardMint",
            "type": "pubkey"
          },
          {
            "name": "funder",
            "type": "pubkey"
          },
          {
            "name": "rewardIndex",
            "type": "u64"
          },
          {
            "name": "rewardDuration",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "lbPair",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parameters",
            "type": {
              "defined": {
                "name": "staticParameters"
              }
            }
          },
          {
            "name": "vParameters",
            "type": {
              "defined": {
                "name": "variableParameters"
              }
            }
          },
          {
            "name": "bumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "binStepSeed",
            "docs": [
              "Bin step signer seed"
            ],
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "pairType",
            "docs": [
              "Type of the pair"
            ],
            "type": "u8"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin id"
            ],
            "type": "i32"
          },
          {
            "name": "binStep",
            "docs": [
              "Bin step. Represent the price increment / decrement."
            ],
            "type": "u16"
          },
          {
            "name": "status",
            "docs": [
              "Status of the pair. Check PairStatus enum."
            ],
            "type": "u8"
          },
          {
            "name": "requireBaseFactorSeed",
            "docs": [
              "Require base factor seed"
            ],
            "type": "u8"
          },
          {
            "name": "baseFactorSeed",
            "docs": [
              "Base factor seed"
            ],
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type"
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "padding 0"
            ],
            "type": "u8"
          },
          {
            "name": "tokenXMint",
            "docs": [
              "Token X mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenYMint",
            "docs": [
              "Token Y mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "reserveX",
            "docs": [
              "LB token X vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "reserveY",
            "docs": [
              "LB token Y vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "protocolFee",
            "docs": [
              "Uncollected protocol fee"
            ],
            "type": {
              "defined": {
                "name": "protocolFee"
              }
            }
          },
          {
            "name": "padding1",
            "docs": [
              "_padding_1, previous Fee owner, BE CAREFUL FOR TOMBSTONE WHEN REUSE !!"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "rewardInfo"
                  }
                },
                2
              ]
            }
          },
          {
            "name": "oracle",
            "docs": [
              "Oracle pubkey"
            ],
            "type": "pubkey"
          },
          {
            "name": "binArrayBitmap",
            "docs": [
              "Packed initialized bin array state"
            ],
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Last time the pool fee parameter was updated"
            ],
            "type": "i64"
          },
          {
            "name": "padding2",
            "docs": [
              "_padding_2, previous whitelisted_wallet, BE CAREFUL FOR TOMBSTONE WHEN REUSE !!"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "preActivationSwapAddress",
            "docs": [
              "Address allowed to swap when the current point is greater than or equal to the pre-activation point. The pre-activation point is calculated as `activation_point - pre_activation_duration`."
            ],
            "type": "pubkey"
          },
          {
            "name": "baseKey",
            "docs": [
              "Base keypair. Only required for permission pair"
            ],
            "type": "pubkey"
          },
          {
            "name": "activationPoint",
            "docs": [
              "Time point to enable the pair. Only applicable for permission pair."
            ],
            "type": "u64"
          },
          {
            "name": "preActivationDuration",
            "docs": [
              "Duration before activation point. Used to calculate pre-activation point for pre_activation_swap_address"
            ],
            "type": "u64"
          },
          {
            "name": "padding3",
            "docs": [
              "_padding 3 is reclaimed free space from swap_cap_deactivate_point and swap_cap_amount before, BE CAREFUL FOR TOMBSTONE WHEN REUSE !!"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "padding4",
            "docs": [
              "_padding_4, previous lock_duration, BE CAREFUL FOR TOMBSTONE WHEN REUSE !!"
            ],
            "type": "u64"
          },
          {
            "name": "creator",
            "docs": [
              "Pool creator"
            ],
            "type": "pubkey"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved space for future use"
            ],
            "type": {
              "array": [
                "u8",
                24
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lbPairCreate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "binStep",
            "type": "u16"
          },
          {
            "name": "tokenX",
            "type": "pubkey"
          },
          {
            "name": "tokenY",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "liquidityOneSideParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "Amount of X token or Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "binLiquidityDist",
            "docs": [
              "Liquidity distribution to each bins"
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "binLiquidityDistributionByWeight"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "liquidityParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of X token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "binLiquidityDist",
            "docs": [
              "Liquidity distribution to each bins"
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "binLiquidityDistribution"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "liquidityParameterByStrategy",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of X token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "strategyParameters",
            "docs": [
              "strategy parameters"
            ],
            "type": {
              "defined": {
                "name": "strategyParameters"
              }
            }
          }
        ]
      }
    },
    {
      "name": "liquidityParameterByStrategyOneSide",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "Amount of X token or Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "strategyParameters",
            "docs": [
              "strategy parameters"
            ],
            "type": {
              "defined": {
                "name": "strategyParameters"
              }
            }
          }
        ]
      }
    },
    {
      "name": "liquidityParameterByWeight",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of X token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "binLiquidityDist",
            "docs": [
              "Liquidity distribution to each bins"
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "binLiquidityDistributionByWeight"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "oracle",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "idx",
            "docs": [
              "Index of latest observation"
            ],
            "type": "u64"
          },
          {
            "name": "activeSize",
            "docs": [
              "Size of active sample. Active sample is initialized observation."
            ],
            "type": "u64"
          },
          {
            "name": "length",
            "docs": [
              "Number of observations"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "position",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "docs": [
              "The LB pair of this position"
            ],
            "type": "pubkey"
          },
          {
            "name": "owner",
            "docs": [
              "Owner of the position. Client rely on this to to fetch their positions."
            ],
            "type": "pubkey"
          },
          {
            "name": "liquidityShares",
            "docs": [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
            ],
            "type": {
              "array": [
                "u64",
                70
              ]
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "userRewardInfo"
                  }
                },
                70
              ]
            }
          },
          {
            "name": "feeInfos",
            "docs": [
              "Swap fee to claim information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "feeInfo"
                  }
                },
                70
              ]
            }
          },
          {
            "name": "lowerBinId",
            "docs": [
              "Lower bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "upperBinId",
            "docs": [
              "Upper bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Last updated timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "totalClaimedFeeXAmount",
            "docs": [
              "Total claimed token fee X"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFeeYAmount",
            "docs": [
              "Total claimed token fee Y"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedRewards",
            "docs": [
              "Total claimed rewards"
            ],
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved space for future use"
            ],
            "type": {
              "array": [
                "u8",
                160
              ]
            }
          }
        ]
      }
    },
    {
      "name": "positionClose",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCreate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionV2",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "docs": [
              "The LB pair of this position"
            ],
            "type": "pubkey"
          },
          {
            "name": "owner",
            "docs": [
              "Owner of the position. Client rely on this to to fetch their positions."
            ],
            "type": "pubkey"
          },
          {
            "name": "liquidityShares",
            "docs": [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
            ],
            "type": {
              "array": [
                "u128",
                70
              ]
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "userRewardInfo"
                  }
                },
                70
              ]
            }
          },
          {
            "name": "feeInfos",
            "docs": [
              "Swap fee to claim information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "feeInfo"
                  }
                },
                70
              ]
            }
          },
          {
            "name": "lowerBinId",
            "docs": [
              "Lower bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "upperBinId",
            "docs": [
              "Upper bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Last updated timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "totalClaimedFeeXAmount",
            "docs": [
              "Total claimed token fee X"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFeeYAmount",
            "docs": [
              "Total claimed token fee Y"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedRewards",
            "docs": [
              "Total claimed rewards"
            ],
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "operator",
            "docs": [
              "Operator of position"
            ],
            "type": "pubkey"
          },
          {
            "name": "lockReleasePoint",
            "docs": [
              "Time point which the locked liquidity can be withdraw"
            ],
            "type": "u64"
          },
          {
            "name": "padding0",
            "docs": [
              "_padding_0, previous subjected_to_bootstrap_liquidity_locking, BE CAREFUL FOR TOMBSTONE WHEN REUSE !!"
            ],
            "type": "u8"
          },
          {
            "name": "feeOwner",
            "docs": [
              "Address is able to claim fee in this position, only valid for bootstrap_liquidity_position"
            ],
            "type": "pubkey"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved space for future use"
            ],
            "type": {
              "array": [
                "u8",
                87
              ]
            }
          }
        ]
      }
    },
    {
      "name": "presetParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binStep",
            "docs": [
              "Bin step. Represent the price increment / decrement."
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ],
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "docs": [
              "Filter period determine high frequency trading time window."
            ],
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "docs": [
              "Decay period determine when the volatile fee start decay / decrease."
            ],
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "docs": [
              "Reduction factor controls the volatile fee rate decrement rate."
            ],
            "type": "u16"
          },
          {
            "name": "variableFeeControl",
            "docs": [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ],
            "type": "u32"
          },
          {
            "name": "maxVolatilityAccumulator",
            "docs": [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ],
            "type": "u32"
          },
          {
            "name": "minBinId",
            "docs": [
              "Min bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "Max bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "protocolFee",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "type": "u64"
          },
          {
            "name": "amountY",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "from",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "amounts",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "activeBinId",
            "type": "i32"
          }
        ]
      }
    },
    {
      "name": "rewardInfo",
      "docs": [
        "Stores the state relevant for tracking liquidity mining rewards"
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "docs": [
              "Reward token mint."
            ],
            "type": "pubkey"
          },
          {
            "name": "vault",
            "docs": [
              "Reward vault token account."
            ],
            "type": "pubkey"
          },
          {
            "name": "funder",
            "docs": [
              "Authority account that allows to fund rewards"
            ],
            "type": "pubkey"
          },
          {
            "name": "rewardDuration",
            "docs": [
              "TODO check whether we need to store it in pool"
            ],
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "docs": [
              "TODO check whether we need to store it in pool"
            ],
            "type": "u64"
          },
          {
            "name": "rewardRate",
            "docs": [
              "TODO check whether we need to store it in pool"
            ],
            "type": "u128"
          },
          {
            "name": "lastUpdateTime",
            "docs": [
              "The last time reward states were updated."
            ],
            "type": "u64"
          },
          {
            "name": "cumulativeSecondsWithEmptyLiquidityReward",
            "docs": [
              "Accumulated seconds where when farm distribute rewards, but the bin is empty. The reward will be accumulated for next reward time window."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "staticParameters",
      "docs": [
        "Parameter that set by the protocol"
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseFactor",
            "docs": [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ],
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "docs": [
              "Filter period determine high frequency trading time window."
            ],
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "docs": [
              "Decay period determine when the volatile fee start decay / decrease."
            ],
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "docs": [
              "Reduction factor controls the volatile fee rate decrement rate."
            ],
            "type": "u16"
          },
          {
            "name": "variableFeeControl",
            "docs": [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ],
            "type": "u32"
          },
          {
            "name": "maxVolatilityAccumulator",
            "docs": [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ],
            "type": "u32"
          },
          {
            "name": "minBinId",
            "docs": [
              "Min bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "Max bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for bytemuck safe alignment"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "strategyParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minBinId",
            "docs": [
              "min bin id"
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "max bin id"
            ],
            "type": "i32"
          },
          {
            "name": "strategyType",
            "docs": [
              "strategy type"
            ],
            "type": {
              "defined": {
                "name": "strategyType"
              }
            }
          },
          {
            "name": "parameteres",
            "docs": [
              "parameters"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "strategyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "spotOneSide"
          },
          {
            "name": "curveOneSide"
          },
          {
            "name": "bidAskOneSide"
          },
          {
            "name": "spotBalanced"
          },
          {
            "name": "curveBalanced"
          },
          {
            "name": "bidAskBalanced"
          },
          {
            "name": "spotImBalanced"
          },
          {
            "name": "curveImBalanced"
          },
          {
            "name": "bidAskImBalanced"
          }
        ]
      }
    },
    {
      "name": "swap",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "from",
            "type": "pubkey"
          },
          {
            "name": "startBinId",
            "type": "i32"
          },
          {
            "name": "endBinId",
            "type": "i32"
          },
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "swapForY",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "protocolFee",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u128"
          },
          {
            "name": "hostFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updatePositionLockReleasePoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "currentPoint",
            "type": "u64"
          },
          {
            "name": "newLockReleasePoint",
            "type": "u64"
          },
          {
            "name": "oldLockReleasePoint",
            "type": "u64"
          },
          {
            "name": "sender",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "updatePositionOperator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "oldOperator",
            "type": "pubkey"
          },
          {
            "name": "newOperator",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "updateRewardDuration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "rewardIndex",
            "type": "u64"
          },
          {
            "name": "oldRewardDuration",
            "type": "u64"
          },
          {
            "name": "newRewardDuration",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateRewardFunder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "rewardIndex",
            "type": "u64"
          },
          {
            "name": "oldFunder",
            "type": "pubkey"
          },
          {
            "name": "newFunder",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "userRewardInfo",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardPerTokenCompletes",
            "type": {
              "array": [
                "u128",
                2
              ]
            }
          },
          {
            "name": "rewardPendings",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "variableParameters",
      "docs": [
        "Parameters that changes based on dynamic of the market"
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "volatilityAccumulator",
            "docs": [
              "Volatility accumulator measure the number of bin crossed since reference bin ID. Normally (without filter period taken into consideration), reference bin ID is the active bin of last swap.",
              "It affects the variable fee rate"
            ],
            "type": "u32"
          },
          {
            "name": "volatilityReference",
            "docs": [
              "Volatility reference is decayed volatility accumulator. It is always <= volatility_accumulator"
            ],
            "type": "u32"
          },
          {
            "name": "indexReference",
            "docs": [
              "Active bin id of last swap."
            ],
            "type": "i32"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for bytemuck safe alignment"
            ],
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "lastUpdateTimestamp",
            "docs": [
              "Last timestamp the variable parameters was updated"
            ],
            "type": "i64"
          },
          {
            "name": "padding1",
            "docs": [
              "Padding for bytemuck safe alignment"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "withdrawIneligibleReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "pubkey"
          },
          {
            "name": "rewardMint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "binArray",
      "type": "bytes",
      "value": "[98, 105, 110, 95, 97, 114, 114, 97, 121]"
    },
    {
      "name": "binArrayBitmapSeed",
      "type": "bytes",
      "value": "[98, 105, 116, 109, 97, 112]"
    },
    {
      "name": "oracle",
      "type": "bytes",
      "value": "[111, 114, 97, 99, 108, 101]"
    },
    {
      "name": "position",
      "type": "bytes",
      "value": "[112, 111, 115, 105, 116, 105, 111, 110]"
    },
    {
      "name": "presetParameter",
      "type": "bytes",
      "value": "[112, 114, 101, 115, 101, 116, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114]"
    }
  ]
};
