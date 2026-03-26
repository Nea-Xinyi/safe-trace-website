import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Safe Trace"

interface CommitmentNotificationProps {
  companyName?: string
  contactEmail?: string
  contactName?: string
}

const CommitmentNotificationEmail = ({ companyName, contactEmail, contactName }: CommitmentNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New commitment form submission from {companyName || 'an organization'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Commitment Submission</Heading>
        <Text style={text}>
          A new organization has pledged their commitment through the {SITE_NAME} website.
        </Text>
        <Section style={detailsSection}>
          <Text style={detailLabel}>Organization Name</Text>
          <Text style={detailValue}>{companyName || 'Not provided'}</Text>
          <Hr style={divider} />
          <Text style={detailLabel}>Contact Email</Text>
          <Text style={detailValue}>{contactEmail || 'Not provided'}</Text>
          <Hr style={divider} />
          <Text style={detailLabel}>Contact Name</Text>
          <Text style={detailValue}>{contactName || 'Not provided'}</Text>
        </Section>
        <Text style={footer}>
          This is an automated notification from {SITE_NAME}. This email was sent because someone submitted the commitment form on your website.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: CommitmentNotificationEmail,
  subject: (data: Record<string, any>) => `New Commitment: ${data.companyName || 'New Organization'}`,
  displayName: 'Commitment form notification',
  to: 'safetrace11@gmail.com',
  previewData: {
    companyName: 'Acme Corp',
    contactEmail: 'jane@acme.com',
    contactName: 'Jane Doe',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '30px 25px', maxWidth: '520px' }
const h1 = { fontSize: '22px', fontWeight: '700' as const, color: 'hsl(270, 50%, 45%)', margin: '0 0 20px' }
const text = { fontSize: '14px', color: 'hsl(260, 12%, 42%)', lineHeight: '1.6', margin: '0 0 20px' }
const detailsSection = { backgroundColor: 'hsl(250, 20%, 98%)', borderRadius: '8px', padding: '20px', margin: '0 0 25px' }
const detailLabel = { fontSize: '12px', color: 'hsl(260, 12%, 42%)', margin: '0 0 2px', textTransform: 'uppercase' as const, letterSpacing: '0.5px', fontWeight: '600' as const }
const detailValue = { fontSize: '15px', color: 'hsl(250, 15%, 20%)', margin: '0 0 0', fontWeight: '500' as const }
const divider = { borderColor: 'hsl(250, 15%, 88%)', margin: '12px 0' }
const footer = { fontSize: '12px', color: 'hsl(260, 12%, 55%)', margin: '30px 0 0', lineHeight: '1.5' }
