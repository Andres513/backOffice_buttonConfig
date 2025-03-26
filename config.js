const CONFIG = {
        URLS: {
            TEMPLATE: 't.corp.amazon.com/create/templates',
            POST_TICKET: 't.corp.amazon.com/*'
        },
        SELECTORS: {
            FORM: ['.title-ticket', '.overview-ticket', '.worklog_corr-ticket', '.time-days', '.time-hours', '.time-minutes',],
            TEMPLATE: ['#ticket-title', '#markdown-editor', '#sim-communicationActions--createComment', '.sim-timeSpent--totalTime'],
            MISC: ['sim-communicationActions--addCommentButton awsui_button_vjswe_lssc8_157 awsui_variant-primary_vjswe_lssc8_230']
        },
        PARAMS: {
            TEMPLATE: ['titleInput', 'overviewInput'],
            POST_TICKET: ['worklogInput']
        },
        RESOLVER_GROUPS: {
            OPC: 'IT-Support-Onsite-AMER',
            OIS: 'IT-Support-North-America',
            OAV: 'AV-Support-AMER'
        },
        LOAD_DELAY: 3500,
        HTMLVALUES: {
            TITLES: [
                'On-Prem Trip to: [SITE]',
                'On-Prem Time Tracking for MISC: [Site]',
                'On-Prem Work for: [MCM]',
                'On-Prem Partner Project Work: [Site, Partner Team Name]',
                'On-Prem Monitoring Ticket Queue (Site,Date)',
                'On-Prem Asset Mgmt/Logistics Activities: (Site, Date)',
                'On-Prem Imaging and Device Maintenance: (Site)',
                'On-Prem Inventory Audit: (Site)',
                //'On-Prem Project work for: [PROJECT LINK] [SITE]',
                'On-Prem Project work for: TAMPERMONKEY SCRIPT TESTING LAX22',
                'Hire and Develop the Best'
            ],
            OVERVIEWS: [
                'This ticket is to capture trip time while traveling to the above mentioned location\n\nStart Date: [MM/DD/YYYY]\n\nEnd Date: [MM/DD/YYYY]\n\nNumber of Work Days: [Days excluding travel days]\n\nSite: [Destination]',
                '**Use this ticket to track time spent doing miscellaneous task**\n\n* Signage Update: [ ]\n    * Planning\n    * BSC Collaboration\n    * Printing\n* Office Improvements: [ ]\n    * Cable Management\n    * Layout Changes\n* Site Cleaning [ ]',
                'This ticket is to track time for MCM work being done if there is no Workfront project associated with MCM.\n\nMCM: [Link to MCM]',
                'This ticket is to track partner team project work. (Ex. working on projects with CIS, L&D)\n\n*One ticket per day per project* even if multiple tasks.\n\nCopy PROGRAM name into short description.',
                '**Use this template to track your time spent on managing ticket queue and event coordination:**\n\n**One Ticket Per Day.**\n\nTicket Workflow: ( )\nEvent Coordination: ( )',
                '**Use this template to record time spent on logistic related task:**\n\n**One Ticket Per Day Per Activity.**\n\nCart Ordering: [ ]\nLoading/Unloading Cart: [ ]\nPO Creation: [ ] \nAV Depot and Delivery: [ ]\nRMA: [ ]\nShipping to Warehouse: [ ]',
                'This ticket is to track time for the following tasks:\n\nTask Name (Select with an "X")\nEquipment Imaging: [ ]\nData destruction (Blancco): [ ]\nBoot key creation/update: [ ]\nComputer Software: [ ]\nMaintenance/Updates: [ ]\n\n**One Ticket Per Day Per Activity.**',
                'This ticket is to track time for Inventory Audit.\n\n**One Ticket Per Day.**',
                'This ticket is to track time for internal team project work being worked on Asana, Quip, Doc Reviews, etc.\n\nSite: [LAX22]\nProject Link: [TAMPERMONKEY TEST]\nPlease updated SimT Ticket Title **[PROJECT NAME]** with the project your time is being put towards.\n\n**One Ticket Per Day Per Project.**',
                //'This ticket is to track time for internal team project work being worked on Asana, Quip, Doc Reviews, etc.\n\nSite: [SITE]\nProject Link: [Link to Project]\nPlease updated SimT Ticket Title **[PROJECT NAME]** with the project your time is being put towards.\n\n**One Ticket Per Day Per Project.**',
                'This ticket is to track below tasks:\n\nInterviews: Prep, Interview, Debrief [ ]\nIVY Feedback [ ]\nOnboarding Buddy [ ]\nTraining [ ]\n\n**One Ticket Per Day Per Activity.**'
            ],
            COMMENTS: [
                'One Ticket per travel - note dates in description. Round trip time.',
                'One Ticket PER occurrence PER Day, when you don\'t know where else to book it.',
                'One Ticket PER MCM even if there is a corresponding project (do not book a duplicate project ticket).',
                'One ticket per day per project even if multiple tasks Copy PROGRAM name into short description.',
                'One Ticket Per Day.',
                'One Ticket Per Day Per Activity.',
                'One Ticket Per Day Per Activity.',
                'One Ticket Per Day.',
                'One Ticket Per Day Per Project.',
                'One Ticket Per Day Per Activity.'
            ]
        },
        STYLES: {
            FORM_STATE: {
                HIDDEN: 'transition: all 0.3s ease; max-height: 0; opacity: 0; overflow: hidden;',
                ACTIVE: 'transition: all 0.2s ease; max-height: 100%; opacity: 1; overflow: visible;'
            },
            ROW_TITLE: {
                NORMAL: 'transition: all 0.2s ease; border-radius: 10px; width: 200px; cursor: pointer; margin: 20px auto 10px auto; padding: 7px; background-color: var(--its-sky);',
                HOVER: 'transition: all 0.2s ease; transform: scale(0.9);'
            },
            TITLE_INPUT: 'border-radius: 10px; width: 100%; height: 40px; margin-bottom: 25px; padding-left: 10px; color: black; cursor: pointer;',
            TEXTAREA: 'border-radius: 10px; width: 100%; height: 250px; border: none; margin-bottom: 20px; padding-left: 10px; color: black; background-color: white;',
            FORM_BUTTON: 'margin-bottom: 15px; margin-top: 15px; float: right;',
            TIME_SPENT_INPUT: 'border-radius: 10px; width: 40px; height: 40px; margin: 5px 20px 5px 5px; float: left; color: black; text-align: center',
            TIME_SPENT_LABEL: 'border-radius: 10px; height: 30px; float: left; margin-top: 10px; color: white;'
        }
    };
