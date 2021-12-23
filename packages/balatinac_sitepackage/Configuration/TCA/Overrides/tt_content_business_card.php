<?php

defined('TYPO3') || die();

if (!is_array($GLOBALS['TCA']['tt_content']['types']['business_card'])) {
    $GLOBALS['TCA']['tt_content']['types']['business_card'] = [];
}

/***************
 * Add content element to selector list
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:balatinac_sitepackage/Resources/Private/Language/locallang_be.xlf:content_element.business_card',
        'business_card',
        'content-element'
    ],
    'panel',
    'after'
);

/***************
 * Assign Icon
 */
$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['business_card'] = 'content-element';

$GLOBALS['TCA']['tt_content']['palettes']['business_card_front'] = [
    'showitem' => '
        header;Name,
        --linebreak--,
        subheader;Position,
        --linebreak--,
        rowDescription;Quote,
    ',
];

$GLOBALS['TCA']['tt_content']['palettes']['business_card_back'] = [
    'showitem' => '
        bodytext;Description with links,
        --linebreak--,
        image;Tech-Stack Icons,
    ',
];

/***************
 * Configure element type
 */
$GLOBALS['TCA']['tt_content']['types']['business_card'] = array_replace_recursive(
    $GLOBALS['TCA']['tt_content']['types']['business_card'],
    [
        'showitem' => '
            --div--;LLL:EXT:balatinac_sitepackage/Resources/Private/Language/locallang_be.xlf:business_card.front_div,
                --palette--;;business_card_front,
            --div--;LLL:EXT:balatinac_sitepackage/Resources/Private/Language/locallang_be.xlf:business_card.back_div,
                --palette--;;business_card_back,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
            --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
                --palette--;;language,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
                --palette--;;hidden,
                --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
                categories,
            --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
        ',
        'columnsOverrides' => [
            'bodytext' => [
                'config' => [
                    'enableRichtext' => true,
                ]
            ]
        ]
    ]
);
